import { server } from './app'

server()
  .then(app => {
    app.listen({ port: 3000, host: '0.0.0.0' })
      .then(_ => {
        process.on('SIGTERM', () => {
          process.exit(0)
        })
          .on('SIGINT', () => {
            process.exit(0)
          })
      }).catch(err => {
        process.exit(1)
      })
  })