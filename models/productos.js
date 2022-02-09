// MODELO
const mongoose = require("mongoose")

const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  descripcion: {
    type: String,
    require: true
  },
  precio: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    require: true
  }
}, {versionKey:false})


module.exports = mongoose.model('productos', productosSchema);

