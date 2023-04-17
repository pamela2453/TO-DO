let tareas = []

let tareasAuxiliar;
let click = false

const contenedorDetareas = document.querySelector("#contenedorTareas")
const valueTexArea = document.querySelector("#textarea")
const mostrar = document.querySelector("#mostrar")

let formatoTarea = ``;


const btnTarea = document.querySelector("#btnTarea");


const marcarTarea = (indice) => {
    console.log(indice)
    tareas[indice].completed = true;

    actuaLizarListaTareas()
    console.log(tareas);
    // const card = event.target.parentNode.parentNode
    // card.classList.add("bg-success", "text-decoration-line-through")
}


const marcarFavoritos = (index)  =>{
    tareas[index].Favorito = true;
    actuaLizarListaTareas()
    console.log(tareas)
}


const mostrarFavoritos = () => {
    click = !click
    if(click){
   tareasAuxiliar = tareas;
   tareas = tareas.filter(item => item.Favorito == true)
   actuaLizarListaTareas();
   mostrar.innerHTML = "Mostrar Todos"
    }else{
        tareas = tareasAuxiliar;
        actuaLizarListaTareas()
        mostrar.innerHTML = "Mostrar Favoritos"
    }
    
} 



const actuaLizarListaTareas = () => {
    const listaTareasHTML = tareas.map((tarea, index) => {
        return `<div class="tarea-container ${tarea.completed == true ? "bg-warning text-danger text-decoration-line-through" : ""} mt-2 card w-100">
    <div class="card-body d-flex justify-content-between align-items-center">
                <div class="form-check">
        <input ${tarea.completed == true ? "checked" : ""} onclick="marcarTarea(${index})" id="inputRadio"
        class="form-check-input " type="radio" style="width: 30px; height:30px ;">
              </div>
             <div class="ps-4 pe-4" style="text-align: justify;">
                ${tarea.message}
                </div>
               <div>
    
             <input ${tarea.Favorito == true ? "checked" : ""} type="checkbox" onclick="marcarFavoritos (${index})">
                </div>
            </div>
        </div>`
    }).join("");

    contenedorDetareas.innerHTML = listaTareasHTML

}



btnTarea.addEventListener("click", () => {
    const nuevaTarea = {
        message: valueTexArea.value,
        completed: false,
        Favorito: false
    };

    tareas.push(nuevaTarea);

    actuaLizarListaTareas();
});









