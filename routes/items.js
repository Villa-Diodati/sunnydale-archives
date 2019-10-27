const Item = require('../models/item');

const routes = async(fastify, options) => {
  fastify.get('/', options, async(request, reply) => {
    reply
      .code(200)
      .send({ message: 'hello' });
  });

  fastify.post('/', options, async(request, reply) => {
    const { item } = request.body;

    reply
      .code(200)
      .send({ message: 'success', item });
  });
}

module.exports = routes;