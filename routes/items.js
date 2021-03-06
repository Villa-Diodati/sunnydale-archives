const Item = require('../models/item');

const routes = async(fastify, options) => {
  fastify.get('/', options, async(request, reply) => {
    reply
      .code(200)
      .send({ message: 'hello' });
  });

  fastify.post('/', options, async(request, reply) => {
    const { item } = request.body;
    const newItem = Item.create(item);
  
    try {
      await newItem.save(item)
        reply
          .code(201)
          .send({ message: 'success', newItem });
    } catch (err) {
      reply
        .code(422)
        .send({ message: 'error', error: err })
    }
  });
}

module.exports = routes;