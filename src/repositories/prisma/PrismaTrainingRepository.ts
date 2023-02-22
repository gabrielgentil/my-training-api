import { Training } from "../../entities/Training/Training";
import { prisma } from "../../infra/db";
import { ITrainingRepository } from "../ITrainingRepository";


export class PrismaTrainingRepository implements ITrainingRepository {
  async findByCategoryId(categoryId: string): Promise<Training> {
    return prisma.trainings.findFirst({
      where: {
        categorysId: categoryId
      }
    })
  }

  async save(training: Training): Promise<void> {
    await prisma.trainings.create({ data: training })
  }
}