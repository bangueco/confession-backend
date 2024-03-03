const mongoose = require('mongoose')

const confessionSchema = new mongoose.Schema({
  message: {
    type: String,
    minLength: 5
  }
})

module.exports = mongoose.model('Confession', confessionSchema)