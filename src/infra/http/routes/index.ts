import { FastifyInstance } from "fastify";

const apiRoutes = async (app: FastifyInstance) => {
  app.register(require('./user'), { prefix: 'user' })
  app.get("/", async () => {
    return {
      api_status: 'my traning api is on fire 🔥'
    }
  })
}


export default apiRoutes