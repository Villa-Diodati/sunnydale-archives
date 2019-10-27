// IMPORTS
const fastify = require('fastify')({
  logger: true
});
require('dotenv').config();
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');

// CONNECT MONGO
mongoose.connect(process.env.MONGO_CONNECTION_URL)
 .then(() => console.log('MongoDB connected.'))
 .catch(err => console.log(err));

 // ROUTES
fastify.register(itemsRouter, { prefix: '/api/items'});
fastify.get('/', (req, res) => {  res.status(404).send() });

// START SERVER
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();