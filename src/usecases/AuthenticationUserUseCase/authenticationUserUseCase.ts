import { FastifyReply, FastifyRequest } from "fastify";

import { IUsersRepository } from "../../repositories/IUserRepository";
import { IAuthenticationUserDTO } from "./authenticationUserDTO";
import { HTTP_ERRORS } from '../../infra/http/errors/index'
import bcrypt from 'bcryptjs'
import { Unauthorized } from 'http-errors'
import Hapi from '@hapi/boom';


export interface IAuthenticationUserUseCase {
  execute(request: FastifyRequest, reply: any): Promise<any>
}

interface IBody {
  email: string
  password: string
}

export class AuthenticationUserUseCase implements IAuthenticationUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute(request: FastifyRequest, reply: FastifyReply): Promise<any> {
    try {
      const { email, password } = request.body as IBody

      const user = await this.usersRepository.findByEmail(email)

      if (user && bcrypt.compareSync(password, user?.password)) {
        const token = await reply.jwtSign({
          sub: user.id,
          email: user.email,
          name: user.name
        }, {
          expiresIn: process.env.JWT_EXPIRATION_TIME
        })


        return { data: { token } }
      }

      return Unauthorized(HTTP_ERRORS.INVALID_USERNAME_OR_PASSWORD)

    } catch (err) {
      throw Hapi.boomify(err)
    }
  }
}