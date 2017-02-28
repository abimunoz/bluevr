require('./config')
// Require models
const Entity = require('../models/entity')


Entity
  .remove({})
  .then( () => {
    var entity = new Entity({
      text: 'something',
      geometry: 'box',
      color: 'blue',
      x: 0,
      y: 2,
      z: -5
    });
    return entity.save();
  })
  .then( () => {
    process.exit();
  })
