var mongoose = require('mongoose')

var EntitySchema = new mongoose.Schema({
  text: String,
  geometry: String,
  color: String,
  x: Number,
  y: Number,
  z: Number
})

module.exports = mongoose.model('Entity', EntitySchema)
