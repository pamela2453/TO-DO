const tareas = []

const contenedorDetareas = document.querySelector("#contenedorTareas")
const valueTexArea = document.querySelector("#textarea")

let formatoTarea = ``;


const btnTarea = document.querySelector("#btnTarea");


const marcarTarea = (event) => {
    const card = event.target.parentNode.parentNode
    card.classList.add("bg-success", "text-decoration-line-through")
}

const marcarFavoritos = (event) => {
    const btn = event.target;
    console.log(btn)
}


btnTarea.addEventListener("click", () => {
    if (valueTexArea.value.trim() == "") {
        alert("Ingrese un texto")
    } else {
        formatoTarea = ` <div id="containerCard" class="mt-2 card w-100">
        <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="form-check">
          <input onclick="marcarTarea(event)" id="inputRadio" class="form-check-input " type="radio" style="width: 30px; height:30px ;">
                  </div>
                 <div class="ps-4 pe-4" style="text-align: justify;">
                    ${valueTexArea.value.trim()}
                    </div>
                   <div>

                 <input type="checkbox" onclick="marcarFavoritos(event)">

                    </div>
                </div>
            </div>`
    }



    contenedorDetareas.innerHTML += formatoTarea
    valueTexArea.value = "";

})









