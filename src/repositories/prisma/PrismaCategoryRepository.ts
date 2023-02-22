import { Category } from "../../entities/Category/Category";
import { prisma } from "../../infra/db";
import { ICategoryRepository } from "../ICategoryRepository";


export class PrismaCategoryRepository implements ICategoryRepository {
  async findByUserId(userId: string): Promise<Category> {
    return prisma.categorys.findFirst({
      where: {
        userId
      },
      include: {
        trainings: true
      },
    })
  }

  async save(category: Category): Promise<void> {
    await prisma.categorys.create({ data: category })
  }
}