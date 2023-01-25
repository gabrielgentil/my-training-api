import { FastifyReply, FastifyRequest } from "fastify";
import { searchCategoryUseCase } from "../../CategoryUseCase/SearchCategoryUseCase";

const handle = async (request: FastifyRequest, response: FastifyReply) => {
  try {

    const { userId } = request.params as any

    const category = await searchCategoryUseCase.findByUserId(userId)

    return response.code(201).send({
      data: category
    });

  } catch (err) {
    return response.code(400).send({
      message: err.message || 'expected error',
      code: 400
    })
  }
}

export default { handle }
