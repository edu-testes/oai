'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    //process.env.USER_KEY
    return { root: true }
  })
}
