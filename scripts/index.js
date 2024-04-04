class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.array = [];
    }

    // activities(){
    //     this.array = [];
    // }

    getAllActivities(){
        return this.array;
    }

    crearActivity(id, title, description, imgUrl){
        let actividad = new Activity(id, title, description, imgUrl)
        this.array.push(actividad);
    }

    deleteActivity(id){
        this.array = this.array.filter(elemento => elemento.id !== id);
    }
    // aqui se implemento la funcion flecha por sugerencia de legibilidad de chatgpt
}

const i = new Repository();

// const {id, title, description, imgUrl} = propiedades

function tarjetasHtml(propiedades) {

    const {id, title, description, imgUrl} = propiedades

    const titulo = document.createElement("h3");
    titulo.innerHTML = title;

    const descripcion = document.createElement("p");
    descripcion.innerHTML = description;

    const img = document.createElement("img");
    img.src = imgUrl;

    const card = document.createElement("div");
    titulo.classList.add("tituloCard")
    descripcion.classList.add("descripcionCard")
    img.classList.add("imagenCard")
    card.classList.add("divCards")
    card.appendChild(titulo)
    card.appendChild(descripcion)
    card.appendChild(img)

    return card;
}

function contenedorNuevo() {
    
    const contenedor = document.getElementById("contenedor") 
    
    contenedor.innerHTML = "";

    const guardado = i.getAllActivities();

    const cards = guardado.map((propiedades) => tarjetasHtml(propiedades))

    cards.forEach((cartas) => contenedor.appendChild(cartas));
}

let k = 1;

function inputs() {
    const titulo = document.getElementById("titulo").value
    const description = document.getElementById("descripcion").value
    const imagen = document.getElementById("url").value

    if (titulo != "") {
        
        if (description != "") {
        
            if (imagen != "") {
                contenedorNuevo();
                i.crearActivity(k,titulo,description,imagen)
                k++;
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

const boton = document.getElementsByClassName("glowing-btn")[0];

boton.addEventListener("click",()=> {
    // evento.preventDefault();
    inputs();
})