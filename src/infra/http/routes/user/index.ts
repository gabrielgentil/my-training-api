import { FastifyInstance } from "fastify";
import { handle } from "../../../../usecases/UserUseCase/createUserController";
import { handleLogin } from "../../../../usecases/AuthenticationUserUseCase/authenticationUserController";

const usersRoutes = async (app: FastifyInstance) => {

  app.post('/', {}, handle)
  app.post('/login', handleLogin)

}

export default usersRoutes

