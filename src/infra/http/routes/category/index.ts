import { FastifyInstance } from "fastify";
import { handle } from "../../../../usecases/CreateCategoryUseCase/createCategoryController";

const categoryRoute = async (app: any) => {
  app.post('/', { preValidation: [app.authenticate] }, handle)
}

export default categoryRoute

