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

const api = "https://api-resfull-byerudito.herokuapp.com/api/productos" 


      
  const obtenerDatos =  async (apiURL) => {
        try {
      const res = await fetch(apiURL);
      console.log(res);
      const data = await res.json();
      console.log(data);
             /* {
                /*imprimirDatos(data)
                siguiente(data.info)
                anterior(data.info)
              }*/
    } catch (error) {
      console.error("Error: ", error);
    }
   }

   obtenerDatos(api)   



  



const port = process.env.PORT || 3000
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port))







