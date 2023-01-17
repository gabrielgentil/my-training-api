import { User } from "../../entities/User/user";
import { ICreateUserRequestDTO } from "./createUserDTO"

export interface ICreateUserUseCase {
  execute(data: ICreateUserRequestDTO): Promise<void>
}

export class CreateUserUseCase implements ICreateUserUseCase {
  async execute(data: ICreateUserRequestDTO): Promise<void> {

    // validação se já existe usuário

    const user = new User(data);

  }
}