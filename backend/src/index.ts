import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import { authRoutes } from "./routes/auth.js";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: ["http://localhost:5173"],
  credentials: true,
});

await fastify.register(cookie);

await fastify.register(authRoutes);

fastify.get("/health", async () => {
  return { status: "ok", service: "finmate-backend" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();