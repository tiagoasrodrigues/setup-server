import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify()
const prisma = new PrismaClient()

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 4444
}).then((port) => {
  console.log(`HTTP Server running in: ${port}`);
})