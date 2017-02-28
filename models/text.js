var mongoose = require('mongoose')

var TextSchema = new mongoose.Schema({
  input: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Text', TextSchema)
