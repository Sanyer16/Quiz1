const express = require('express')
const person_route = express.Router();
const personShema = require('../models/person.models');

/* Crear la primera persona

request http: POST

Endpoint: http://localhost:5000/api/v1/people/person */
person_route.post('/person', (req, res)=>{
  const person = personShema(req.body);
  person
  .save()
  .then((data) => {res.json(data)})
  .catch((error) => {res.json({message: error})});
});

/* Listar personas
Endpoint: http://localhost:5000/api/v1/products*/

person_route.get('/',(req, res)=> {
  personShema
  .find()
  .then((data) => {res.json(data)})
  .catch((error) => {res.json({message: error})});
});

/* Identificar una persona especifica
http://localhost:5000/api/v1/products/:personId */

person_route.get('/:personId', (req, res)=> {
  const {personId} = req.params;
  personShema
  .findById(personId)
  .then((data) => {res.json(data)})
  .catch((error) => {res.json({message: error})});
})

/* Ruta para editar una persona especifica */
person_route.put('/:personId', (req, res)=>{
    const {personId} = req.params;
    const peopleBody = req.body;
  personShema
  .updateOne({_id: personId, $set: peopleBody})
  .then((data) => res.json({message: data}))
  .catch((error) => res.json({message: error}));
  });

/* Ruta para eliminar una persona especifica */
person_route.delete('/:personId', (req, res)=>{
    const {personId} = req.params;
    personShema
    .remove({_id: personId})
    .then((data) => res.json({message: data}))
    .catch((error) => res.json({message: error}));
  });

module.exports = person_route;
