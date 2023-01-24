import { AuthenticationUserUseCase } from "./authenticationUserUseCase";
import { PrismaUserRepository } from '../../repositories/prisma/PrismaUserRepository'

const prismaUserRepository = new PrismaUserRepository()
const authenticationUserUseCase = new AuthenticationUserUseCase(prismaUserRepository)

export { authenticationUserUseCase }