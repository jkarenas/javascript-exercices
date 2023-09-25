//creando una clase de mario bros
/*Una clase es una plantilla para crear objetos,estos tendran la mismas caracteristicas que las clases, 
que son "atributos" y "metodos"

Estamos creando el video juego Mario Bros. Mis objetos son "player1" y "player2" que representan mario y luigi,
como atributos tenemos "nombre" y "color de sombrero" y los metodos son funciones , en este caso son las 
acciones que tiene mi personaje (saltar,correr y saludar)
*/

class Player {                        //palabra reservada class y nombre de la clase comenzando con mayuscula
    constructor(nombre,colorSombrero){//en vez de function usamos constructor y ncolocamos los parametros que se convertiran en los valores de los atributos 
    this._nombre=nombre;              //Creamos uno por uno las propiedades o atributos que va a tener el objeto usando
    this._sombrero=colorSombrero      //this. y un guion bajo al comienzo del atributo
    } 
//metodo                                 
saltar(){}                            //sin usar comas ponemos las funciones                     
correr (){}
saludar (){
    return `Hola gente soy ${this._nombre} y mi sombrero es de color ${this._sombrero} chiaooooo`
}
}
//ahora podemos crear objetos usando la clase como plantilla
let player1 = new Player ("Mario","rojo");
let player2 = new Player ("Luigi","verde")
console.log (player1)
console.log(player1.saludar())//para ejecutar metodos
//ejercicio para memorizar la sintaxis de una funcion constructora utilizando un carro:
function Auto(puertas, ruedas,color,marca,modelo){
    this._puertas=puertas
    this._ruedas=ruedas
    this._color=color
    this._marca=marca
    this._modelo=modelo
}
let primerAuto = new Auto (4,4,'negro','toyota',2023)
console.log (primerAuto)

//mismo ejercicio para memorizar la sintaxis de una expresion de clase
class Carro {
constructor (puertas,ruedas,color,marca,modelo){
    this._puertas=puertas
    this._ruedas=ruedas
    this._color=color
    this._marca=marca
}


}
let carroNuevo = new Carro(4,4,"rojo","lamborghini")
console.log( carroNuevo)



//next metodos get and set



