//partiendo de que ya sabemos hacer variables:
let pajaro = "paloma"
let pajaros =[ "avestruz","loro","aguila"]

// ahora los objetos permiten almacenar varios datos a la vez como lo hacen
// los arreglos y tambien permiten colocar un nombre a cada uno de los datos que almacena,
//estos se conocen como porpiedad
let pajarillos={
    vuela:true,
    color:['amarillo', 'verde', 'rojo','azul'],
    paisDondeVive: ['colombia','venezuela','ecuador'],
    patas: 2

}

let usuarios ={
    nombre:["juan"],
    edad:29,
    estudios:['ingles','programacion']
}
console.log(usuarios)

//para agregar propiedades
usuarios.carrera="programador"
console.log(usuarios)
//para borrar se usa delete
delete usuarios.edad
console.log (usuarios)
//para conocer si existe una propiedad o no
console.log(usuarios.hasOwnProperty("nombre"))


//constructores de objetos, es uns funcion que nos permite crear objetos
//constructor con canciones que me se de guitarra:

function Canciones (nombre,nivel,dificultad,conCanto,dobleGuitarra){
    //las propiedades se creando con el valor que toma de los parametros usando la palabra 'this',
    //this nos indica que esta trabajando con el objeto actual
    this.nombre=nombre;
    this.nivel=nivel;
    this.dificultad=dificultad;
    this.conCanto=conCanto;
    this.dobleGuitarra=dobleGuitarra;
}
let song1=new Canciones("la flaca","medio","medio",true,true)
let song2=new Canciones ("no deje q","facil","facil",true,true)
console.log (song2)