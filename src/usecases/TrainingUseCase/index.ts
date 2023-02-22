import { CreateTrainingUseCase } from "./createTrainingUseCase";
import { PrismaTrainingRepository } from "../../repositories/prisma/PrismaTrainingRepository"

const prismaTrainingRepository = new PrismaTrainingRepository()
const createTrainingUseCase = new CreateTrainingUseCase(prismaTrainingRepository)

export { createTrainingUseCase }