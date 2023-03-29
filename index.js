//El uso del fertch

let data;
let arreglo = []
const div = document.querySelector(".container");

window
    .fetch("https://platzi-avo.vercel.app/api/avo")
    .then((Response) => Response.json())
    .then((responseJSON) => {
        data = responseJSON.data
        for (i = 0; i < data.length; i++) {

            //     //crea un elemento parrafo
            //     const n = document.createElement("p")
            //     const p = document.createElement("p")
            //     //const n = documento.createElement("p")

            //    //agrego el texto que contiene el parrafo
            //     n.textContent = data[i].name;
            //     p.textContent = data[i].price 
            //      //agrego o guardo en el arregolo el parrafo
            //     //y su contenido creado
            //     arreglo.push(n,p)
            
          
            const image = `https://platzi-avo.vercel.app/${data[i].image}`

            let card = `<div class="mb-3 col-6 d-flex justify-content-center">
            <div class="card bg-dark border border-4 border-warning text-info" style="width: 18rem;">

                 <img src="${image}" class="card-img-top-" alt="...">
                   <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                            <p class="card-text text-danger">${data[i].price}</p>
                        <a href="#" class="btn btn-success">Go somewhere</a>
                     </div>
                 </div>
            </div>`

            arreglo.push(card)

        }

        div.innerHTML = [...arreglo].join(" ")

    })


