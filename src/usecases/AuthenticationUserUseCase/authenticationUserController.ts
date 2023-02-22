import { FastifyReply, FastifyRequest } from "fastify";
import { authenticationUserUseCase } from "../../usecases/AuthenticationUserUseCase";

export const handleLogin = async (request: FastifyRequest, response: FastifyReply) => {
  return authenticationUserUseCase.execute(request, response)
}