const mongoose = require('mongoose')

const confessionSchema = new mongoose.Schema({
  message: {
    type: String,
    minLength: [5, 'Message must be greater than 5'],
    required: [true, 'Message input must be filled']
  }
})

module.exports = mongoose.model('Confession', confessionSchema)