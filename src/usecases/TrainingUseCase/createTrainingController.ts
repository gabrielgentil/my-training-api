import { FastifyReply, FastifyRequest } from "fastify";
import { createTrainingUseCase } from "../../usecases/TrainingUseCase";

interface IBody {
  name: string
  repetitions: string
  series: string
  categorysId: string
}

export const handle = async (request: FastifyRequest, response: FastifyReply) => {
  try {
    // const { name, repetitions, series, categorysId } = request.body as IBody;
    const trainings = request.body as IBody[]

    await createTrainingUseCase.execute(trainings)

    return response.code(201).send();

  } catch (err) {
    return response.code(400).send({
      message: err.message || 'expected error',
      code: 400
    })
  }
}