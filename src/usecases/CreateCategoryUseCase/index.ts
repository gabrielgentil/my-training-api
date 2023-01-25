import { CreateCategoryUseCase } from "./createCategoryUseCase";
import { PrismaCategoryRepository } from "../../repositories/prisma/PrismaCategoryRepository"

const prismaCategoryRepository = new PrismaCategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository)

export { createCategoryUseCase }