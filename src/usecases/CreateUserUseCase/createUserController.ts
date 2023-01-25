import { FastifyReply, FastifyRequest } from "fastify";
import { createUserUseCase } from "../../usecases/CreateUserUseCase";


interface IBody {
  name: string
  email: string
  password: string
}

export const handle = async (request: FastifyRequest, response: FastifyReply) => {
  try {
    const { name, email, password } = request.body as IBody;

    await createUserUseCase.execute({ name, email, password })

    return response.code(201).send();

  } catch (err) {
    return response.code(400).send({
      message: err.message || 'expected error',
      code: 400
    })
  }
}