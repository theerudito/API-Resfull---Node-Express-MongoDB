


let page = 1;
const botonAnterior = document.getElementById("btnAnterior")
const botonSiguiente = document.getElementById("btnSiguiente")


const siguiente = (info)  => {
  botonSiguiente.addEventListener("click", (e) =>{
    e.preventDefault()
    if (page < 42) {
      obtenerDatos(`${info.next}`)
      page += 1     
      } 
   })
}

const anterior = (info) => {
  botonAnterior.addEventListener("click", (e) =>{
    e.preventDefault()
    if (page > 1) {
      obtenerDatos(`${info.prev}`)
      page -= 1  
      }
  })
}

const api = "http://localhost:2000/api/productos/" 


      
  const obtenerDatos =  async (apiURL) => {
        try {
      const res = await fetch(apiURL);
      console.log(res);
      const data = await res.json();
      console.log(data);
              {
                imprimirDatos(data)
                siguiente(data.info)
                anterior(data.info)
              }
    } catch (error) {
      console.error("Error: ", error);
    }
   }

   obtenerDatos(api)   


  const imprimirDatos = (datos) => {
          let html = "";
          datos.data.results.forEach(personaje => {
                html += '<div class="col">'
                html += '<div class="card" style="width: 13rem;">'
                //html += `<img src="${items.name}class="card-img-top" alt="...">`   
                html += '<div class="card-body">'
                html += `<h5 class="card-title">Nombre: ${personaje.name}</h5>`
                /*html += `<p class="card-text">Genero: ${personaje.gender}</hp>`
                html += `<p class="card-text">Especie: ${personaje.species}</p>`
                html += `<p class="card-text">Especie: ${personaje.status}</p>`*/
                html += '</div>'
                html += '</div>'
                html += '</div>'
          });
        document.getElementById("personaje").innerHTML = html
  }

















   