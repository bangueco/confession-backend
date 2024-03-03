const confessionsRouter = require('express').Router()
const Confession = require('../models/confession')

confessionsRouter.get('/', (request, response) => {
  Confession.find({})
  .then(msg => response.json(msg))
})

confessionsRouter.get('/:id', (request, response) => {
  Confession.findById(request.params.id)
  .then(msg => response.json(msg))
})

confessionsRouter.post('/', (request, response) => {
  if (!request.body.message) return response.status(400).json({'error': 'invalid entry'})

  const confession = new Confession({message} = request.body)

  confession.save().then(savedConfession => {
    response.json(savedConfession)
  })
})

confessionsRouter.put('/:id', (request, response, next) => {
  const newConfession = {message} = request.body

  Confession.findByIdAndUpdate(request.params.id, newConfession, {new: true})
  .then(newConfession => response.json(newConfession))
  .catch(error => next(error))
})

confessionsRouter.delete('/:id', (request, response, next) => {
  Confession.findByIdAndDelete(request.params.id)
  .then(deletedNote => response.status(204).end())
  .catch(error => next(error))
})

module.exports = confessionsRouter