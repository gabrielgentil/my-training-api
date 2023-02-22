import { User } from "../../entities/User/user";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./createUserDTO"

export interface ICreateUserUseCase {
  execute(data: ICreateUserRequestDTO): Promise<void>
}

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute(data: ICreateUserRequestDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user)

  }
}