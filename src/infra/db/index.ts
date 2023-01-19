import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
  log: ["error", "info", "query", "warn"],
})

export const health = async () => {
  return prisma.$queryRaw`SELECT NOW()`
    .then(data => data)
    .catch(err => { throw new Error(err) })
}
