const apiRoutes = async (app: any) => {
  app.register(require('./user'), { prefix: 'user' })
  app.register(require('./category'), { prefix: 'category' })

  app.get("/", {
    // preValidation: [app.authenticate]
  }, async () => {
    return {
      api_status: 'my traning api is on fire 🔥'
    }
  })
}


export default apiRoutes