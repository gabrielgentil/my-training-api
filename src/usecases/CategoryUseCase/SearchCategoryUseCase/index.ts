import { SearchCategoryUseCase } from "./searchCategoryUseCase";
import { PrismaCategoryRepository } from "../../../repositories/prisma/PrismaCategoryRepository"

const prismaCategoryRepository = new PrismaCategoryRepository()
const searchCategoryUseCase = new SearchCategoryUseCase(prismaCategoryRepository)

export { searchCategoryUseCase }