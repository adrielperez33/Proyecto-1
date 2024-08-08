// class Activity{
//     constructor(id, title, description, imgUrl){
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.imgUrl = imgUrl;
//     }
// }

// class Repository{
//     constructor(){
//         this.array = [];
//     }


//     getAllActivities(){
//         return this.array;
//     }

//     crearActivity(id, title, description, imgUrl){
//         let actividad = new Activity(id, title, description, imgUrl)
//         this.array.push(actividad);
//     }

//     deleteActivity(id){
//         this.array = this.array.filter(elemento => elemento.id !== id);
//         return this.array
//     }
//     // aqui se implemento la funcion flecha por sugerencia de legibilidad de chatgpt
// }

const i = new Repository();


function tarjetasHtml(propiedades) {

    const {id, title, description, imgUrl} = propiedades

    const titulo = document.createElement("h3");
    titulo.innerHTML = title;

    const descripcion = document.createElement("p");
    descripcion.innerHTML = description;

    const img = document.createElement("img");
    img.src = imgUrl;

    const botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.addEventListener("click", () => {
    i.deleteActivity(id);
    contenedorNuevo();
    });

    const card = document.createElement("div");
    titulo.classList.add("tituloCard")
    descripcion.classList.add("descripcionCard")
    img.classList.add("imagenCard")
    card.classList.add("divCards")
    botonEliminar.classList.add("glowing-btn")
    // card.appendChild(titulo)
    // card.appendChild(descripcion)
    // card.appendChild(img)
    // aca lo cambie porque lo cambio el profe
    card.append(titulo,descripcion,img,botonEliminar)

    return card;
}

function contenedorNuevo() {
    
    const contenedor = document.getElementById("contenedor") 
    
    contenedor.innerHTML = "";

    const guardado = i.getAllActivities();

    const cards = guardado.map((propiedades) => tarjetasHtml(propiedades))

    cards.forEach((cartas) => contenedor.appendChild(cartas));
}

let k = 0;

function handler() {
    const titulo = document.getElementById("titulo").value
    const description = document.getElementById("descripcion").value
    const imagen = document.getElementById("url").value

    // if (titulo !== "" && descripcion !== "" && imagen !== "") {
    //     i.crearActivity(k, titulo, descripcion, imagen);
    //     k++;
    //     contenedorNuevo();
    // } else {
    //     alert("Hay datos incompletos");
    // }

    // el codigo de arriba lo dejo comentado para cumplir con la consigna (mostrar un mensaje avisando al usuario de que hay datos incompletos)
    // pero dejo el de abajo pq me parece mas excato que la pagina te diga que campo esta incompleto

    if (titulo != "") {
        
        if (description != "") {
        
            if (imagen != "") {                                                                                         
                i.crearActivity(k,titulo,description,imagen)
                k++;
                contenedorNuevo();
            }else{
                alert("falta completar la imagen")
            }
        }else{
            alert("falta completar la descripcion")
        }
    }else{
        alert("falta completar el titulo")
    }
}

const boton = document.getElementsByClassName("glowing-btn")[k];

boton.addEventListener("click",()=> {
    handler();
})
