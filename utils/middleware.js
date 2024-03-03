const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') return response.status(404).send({error: 'id not found'})

  next(error)
}

module.exports = {
  unknownEndpoint,
  errorHandler
}