// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { Repository, Activity } = require("../scripts/model");


describe("testing general", () => {
  let lista;
  let lista2;

    beforeEach(() => {
        lista = new Activity();
        lista2 = new Repository();
    })


    it("hay un array", () =>{
      expect(lista2.array).toEqual([])
    })
    it("debe tener una funcion para eliminar",() =>{
      expect(typeof lista2.deleteActivity).toBe("function")
    })  
    it("la funcion que elimina si elimina", () =>{
      lista2.crearActivity("1","hola","jugador de lol","http/fasfasfas")
      lista2.deleteActivity("1")
      expect(lista2.getAllActivities()).toEqual([])
      
    })
    it("retorna y guarda array", () =>{
      lista2.crearActivity("1","hola","hola juego al lol", "http/gaesgwrge")
      expect(lista2.getAllActivities).not.toEqual([])
    })
  });
