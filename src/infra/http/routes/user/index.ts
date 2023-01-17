import { FastifyInstance } from "fastify";
import { handle } from "../../../../usecases/CreateUserUSeCase/createUserController";


const usersRoutes = async (app: FastifyInstance) => {

  app.post('/', {}, handle)
}

export default usersRoutes

