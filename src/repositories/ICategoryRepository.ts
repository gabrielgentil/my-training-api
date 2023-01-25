import { Category } from "../entities/Category/Category";

export interface ICategoryRepository {
  findByUserId(userId: string): Promise<Category>;
  save(user: Category): Promise<void>;
}