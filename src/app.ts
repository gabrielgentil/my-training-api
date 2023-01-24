import fastify from "fastify";
import "@fastify/jwt"

declare module "@fastify/jwt" {
  interface FastifyJWT { }
}

export const server = async () => {
  const app = fastify({
    logger: true,
  });

  await app.register(require('@fastify/etag'))
  await app.register(require('@fastify/helmet'))
  await app.register(require('@fastify/cors'), { origin: '*' })
  await app.register(require('./infra/http/plugins/auth'))
  await app.register(require('./infra/http/routes'), { prefix: 'api/v1' })


  return app;
}