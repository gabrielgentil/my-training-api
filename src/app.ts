import fastify from "fastify";

export const server = async () => {
  const app = fastify({
    logger: true,
  });

  // await app.register(require('@fastify/auth'))
  // await app.register(require('@fastify/helmet'))
  await app.register(require('@fastify/cors'), { origin: '*' })
  await app.register(require('./infra/http/routes'), { prefix: 'api/v1' })

  return app;
}