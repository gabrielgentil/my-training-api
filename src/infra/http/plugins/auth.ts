import fastifyPlugin from 'fastify-plugin';
import { FastifyReply, FastifyRequest } from "fastify";


const fp = fastifyPlugin(async function (fastify, _opts) {
  fastify.register(require('@fastify/jwt'), {
    secret: process.env.JWT_SECRET,
    messages: {
      badRequestErrorMessage: 'Format is Authorization: Bearer [token]',
      noAuthorizationInHeaderMessage: 'Autorization header is missing!',
      authorizationTokenExpiredMessage: 'Authorization token expired',
      authorizationTokenInvalid: (err) => {
        return `Authorization token is invalid: ${err.message}`
      }
    }
  })

  fastify.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})

export default fp
