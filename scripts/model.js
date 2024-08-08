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


    getAllActivities(){
        return this.array;
    }

    crearActivity(id, title, description, imgUrl){
        let actividad = new Activity(id, title, description, imgUrl)
        this.array.push(actividad);
    }

    deleteActivity(id){
        this.array = this.array.filter(elemento => elemento.id !== id);
        return this.array
    }
    // aqui se implemento la funcion flecha por sugerencia de legibilidad de chatgpt
}
module.exports = {
    Activity,
    Repository
};