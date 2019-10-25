require('dotenv').config()
const mongoose = require('mongoose')

const fastify = require('fastify')({
  logger: true
})

mongoose.connect(process.env.MONGO_CONNECTION_URL)
 .then(() => console.log('MongoDB connected.'))
 .catch(err => console.log(err))

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()