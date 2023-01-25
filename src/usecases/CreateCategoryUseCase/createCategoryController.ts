import { FastifyReply, FastifyRequest } from "fastify";
import { createCategoryUseCase } from "../../usecases/CreateCategoryUseCase";


interface IBody {
  name: string
  userId: string
  createdBy: string
}

export const handle = async (request: FastifyRequest, response: FastifyReply) => {
  try {
    const { name, userId, createdBy } = request.body as IBody;

    await createCategoryUseCase.execute({ name, userId, createdBy })

    return response.code(201).send();

  } catch (err) {
    return response.code(400).send({
      message: err.message || 'expected error',
      code: 400
    })
  }
}