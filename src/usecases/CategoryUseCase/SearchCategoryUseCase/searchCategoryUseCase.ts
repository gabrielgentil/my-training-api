import { Category } from "../../../entities/Category/Category";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { BadRequest } from 'http-errors'


export interface ISearchUserUseCase {
  findByUserId(userId: string): Promise<Category>
}

export class SearchCategoryUseCase implements ISearchUserUseCase {
  constructor(private categorysRepository: ICategoryRepository) { }


  findByUserId(userId: string): Promise<Category> {
    return this.categorysRepository.findByUserId(userId)
  }

}