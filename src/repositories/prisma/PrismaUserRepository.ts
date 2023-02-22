import { User } from "../../entities/User/user";
import { prisma } from "../../infra/db";
import { IUsersRepository } from "../IUserRepository";


export class PrismaUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return prisma.users.findFirst({
      where: {
        email
      }
    })
  }

  async save(user: User): Promise<void> {
    await prisma.users.create({ data: user })
  }

}