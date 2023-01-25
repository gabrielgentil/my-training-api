import { FastifyInstance } from "fastify";
import CreateCategoryController from "../../../../usecases/CategoryUseCase/CreateCategoryUseCase/createCategoryController";
import SearchCategoryController from "../../../../usecases/CategoryUseCase/SearchCategoryUseCase/searchCategoryController";

const categoryRoute = async (app: any) => {
  app.post('/', { preValidation: [app.authenticate] }, CreateCategoryController.handle)
  app.get('/:userId', { preValidation: [app.authenticate] }, SearchCategoryController.handle)
}

export default categoryRoute

