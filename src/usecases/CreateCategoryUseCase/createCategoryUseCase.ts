import { Category } from "../../entities/Category/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { ICreateCategoryRequestDTO } from "./createCategoryDTO"
import { BadRequest } from 'http-errors'


export interface ICreateUserUseCase {
  execute(data: ICreateCategoryRequestDTO): Promise<void>
}

export class CreateCategoryUseCase implements ICreateUserUseCase {
  constructor(private categorysRepository: ICategoryRepository) { }

  async execute(data: ICreateCategoryRequestDTO): Promise<void> {

    const category = new Category(data);
    const validateProps = Category.validate(data)

    if (!validateProps) {
      throw new Error('Fields name, createdBy and userId required.');
    }

    await this.categorysRepository.save(category)

  }
}