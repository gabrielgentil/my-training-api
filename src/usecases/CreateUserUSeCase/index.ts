import { CreateUserUseCase } from "./createUserUseCase";
import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository"


const prismaUserRepository = new PrismaUserRepository()
const createUserUseCase = new CreateUserUseCase(prismaUserRepository)

export { createUserUseCase }