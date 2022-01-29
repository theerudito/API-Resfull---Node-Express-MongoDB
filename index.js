const express = require("express");
const conexion = require("./database/db");
const router = require("./src/productos");
const app  = express()


// MIDDELEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", router)



app.get("/", (req, res) => {
  res.send("Holas")
})



const port = process.env.PORT || 2000
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port))







