// class figura{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
// }
// class Circulo extends figura{
//     constructor(radio){
//         super("circulo")
//         this.radio = radio;
//     }

//     area(){
//         return Math.PI * this.radio * this.radio;
//     }
// }

// const miCirculo = new Circulo(5);
// console.log(miCirculo.area());

// function foo(a,b =2){
//     console.log(a-b);
// }
// foo(5);

// const partes = ["hombro ", "rodilla "]
// const cuerpo = ["cabeza ", ...partes, " y ", " dedos"]
// console.log(cuerpo.join(""));

// function foo(a,b = 5) {
//     console.log(a + b);
// }

// foo(3,7)

const arrayy = [1,2,3,4];
const [x,y] = arrayy
console.log(y);