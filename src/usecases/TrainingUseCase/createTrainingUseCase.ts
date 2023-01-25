import { Training } from "../../entities/Training/Training";
import { ITrainingRepository } from "../../repositories/ITrainingRepository";
import { ICreateTrainingRequestDTO } from "./createTrainingDTO"

export interface ICreateTrainingUseCase {
  execute(data: ICreateTrainingRequestDTO[]): Promise<void>
}

export class CreateTrainingUseCase implements ICreateTrainingUseCase {
  constructor(private trainingRepository: ITrainingRepository) { }

  async execute(data: ICreateTrainingRequestDTO[]): Promise<void> {

    for (const training of data) {
      const category = new Training(training);

      await this.trainingRepository.save(category)
    }
  }
}