// INDEX JS
const express = require("express");
const conexion = require("./database/db");
const router = require("./controlador/productos")
const app  = express()

// MIDDELEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", router)

const port = process.env.PORT || 3000
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO " + port))


