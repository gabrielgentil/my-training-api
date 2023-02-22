import { FastifyInstance } from "fastify";
import { handle } from "../../../../usecases/TrainingUseCase/createTrainingController";

const trainingRoute = async (app: any) => {
  app.post('/', { preValidation: [app.authenticate] }, handle)
}

export default trainingRoute

