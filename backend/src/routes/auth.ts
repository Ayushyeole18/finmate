import type { FastifyInstance } from "fastify";
import { z } from "zod";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../lib/auth-middleware.js";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(1, "Name is required"),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

const SESSION_COOKIE_NAME = "finmate_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

async function createSessionAndSetCookie(reply: any, userId: string) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  await prisma.session.create({
    data: { token, expiresAt, userId },
  });

  reply.setCookie(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/auth/signup", async (request, reply) => {
    const parseResult = signupSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: parseResult.error.issues[0]?.message ?? "Invalid input",
        },
      });
    }

    const { email, password, name } = parseResult.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return reply.status(409).send({
        success: false,
        error: { code: "EMAIL_TAKEN", message: "An account with this email already exists" },
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, passwordHash, name },
    });

    await createSessionAndSetCookie(reply, user.id);

    return reply.status(201).send({
      success: true,
      data: { id: user.id, email: user.email, name: user.name },
    });
  });

  fastify.post("/auth/login", async (request, reply) => {
    const parseResult = loginSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: parseResult.error.issues[0]?.message ?? "Invalid input",
        },
      });
    }

    const { email, password } = parseResult.data;

    const user = await prisma.user.findUnique({ where: { email } });

    const invalidCredentialsResponse = () =>
      reply.status(401).send({
        success: false,
        error: { code: "INVALID_CREDENTIALS", message: "Invalid email or password" },
      });

    if (!user) {
      return invalidCredentialsResponse();
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      return invalidCredentialsResponse();
    }

    await createSessionAndSetCookie(reply, user.id);

    return reply.status(200).send({
      success: true,
      data: { id: user.id, email: user.email, name: user.name },
    });
  });

  fastify.post("/auth/logout", async (request, reply) => {
    const token = request.cookies[SESSION_COOKIE_NAME];

    if (token) {
      await prisma.session.deleteMany({ where: { token } });
    }

    reply.clearCookie(SESSION_COOKIE_NAME, { path: "/" });

    return reply.status(200).send({ success: true, data: null });
  });

  fastify.get("/auth/me", { preHandler: requireAuth }, async (request, reply) => {
    return reply.send({ success: true, data: request.user });
  });
}