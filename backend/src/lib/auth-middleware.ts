import type { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "./prisma.js";

const SESSION_COOKIE_NAME = "finmate_session";

declare module "fastify" {
  interface FastifyRequest {
    user?: { id: string; email: string; name: string };
  }
}

export async function requireAuth(request: FastifyRequest, reply: FastifyReply) {
  const token = request.cookies[SESSION_COOKIE_NAME];

  if (!token) {
    return reply.status(401).send({
      success: false,
      error: { code: "UNAUTHENTICATED", message: "Not logged in" },
    });
  }

  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return reply.status(401).send({
      success: false,
      error: { code: "SESSION_EXPIRED", message: "Session expired, please log in again" },
    });
  }

  request.user = { id: session.user.id, email: session.user.email, name: session.user.name };
}