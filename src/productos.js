const express = require("express");

const productosSchema  =  require("../src/models/productos")

const router = express.Router();



// CONSULTAR TODOS LOS PRODUCTOS
router.get("/productos", (req, res) => {
  productosSchema.find()
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
}); 
// CONSULTAR TODOS LOS PRODUCTOS
//--------------------------------------------------------------

// CONSULTAR UN PRODUCTOS
router.get("/productos/:id", (req, res) => {
  const {id} = req.params
  productosSchema.findById(id)
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
}); 
// CONSULTAR UN PRODUCTOS

//--------------------------------------------------------------

// CREAR UN NUEVO PRODUCTOS
router.post("/productos", (req, res) => {
  const producto = productosSchema(req.body);
  producto.save()
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
}); 
// CREAR UN NUEVO PRODUCTOS


//--------------------------------------------------------------

// EDITAR UN NUEVO PRODUCTOS
router.put("/productos/:id", (req, res) => {
  const {id} = req.params
  const {nombre, descripcion, precio, stock} = req.body
  productosSchema.updateOne({_id: id}, {$set: {nombre, descripcion, precio, stock}})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
}); 
// EDITAR UN NUEVO PRODUCTOS

//--------------------------------------------------------------

// ELIMINAR UN PRODUCTOS
router.delete("/productos/:id", (req, res) => {
  const {id} = req.params
  const {nombre, descripcion, precio, stock} = req.body
  productosSchema.deleteOne({_id: id}, {$set: {nombre, descripcion, precio, stock}})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
}); 
// ELIMINAR UN PRODUCTOS


//--------------------------------------------------------------

module.exports = router