const express = require('express')
const router = express.Router()
const Entity = require('../models/entity')


  ////////////
 // CREATE //
////////////
router.post('/create', function(req, res, next) {
  console.log(req.body);
  const entity = {
    text: req.body.data.text,
    geometry: req.body.data.geometry,
    color: req.body.data.color,
    x: req.body.data.x,
    y: req.body.data.y,
    z: req.body.data.z
  };
  let data = new Entity(entity);
  data.save();
  res.json({message: 'entity created sucessfully'});
});


  //////////
 // READ //
//////////
router.get('/', function(req, res, next) {
  Entity.find( {}, function(err, entities) {
    if (err) {
        console.log(err);
    } else {
        console.log(entities);
        res.render('index', {entities: entities})
    }
  })
});


  ////////////
 // UPDATE //
////////////
router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id', id);
  console.log('body', req.body)
  Entity.findByIdAndUpdate(id, req.body, {new: true}, function(err, entity) {
    if (err) {
        console.log('err:', err);
    } else {
        console.log('entity:', entity);
        res.json('hello');
    }
  })
});


  ////////////
 // DELETE //
////////////
router.delete('/delete', function(req, res, next) {
  Entity.remove({}, function(err, entity) {
    if(err) {
      console.log(err);
    } else {
      console.log('everything deleted');
    }
  res.render('index');
  })
});

module.exports = router
