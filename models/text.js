var mongoose = require('mongoose')

var TextSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Text', TextSchema)
