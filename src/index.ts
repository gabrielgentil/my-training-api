import { server } from './app'
import { prisma } from './infra/db'

server()
  .then(app => {
    app.listen({ port: 3000, host: '0.0.0.0' })
      .then(_ => {
        process.on('SIGTERM', () => {
          prisma.$disconnect()
          process.exit(0)
        })
          .on('SIGINT', () => {
            prisma.$disconnect()
            process.exit(0)
          })
      }).catch(err => {
        process.exit(1)
      })
  })