import { Training } from "../entities/Training/Training";

export interface ITrainingRepository {
  findByCategoryId(categoryId: string): Promise<Training>;
  save(training: Training): Promise<void>;
}