//reto platzi js fundamentos  #23

//creo un array donde se guardara la lista de autos
var autos=[]
//creamos la funcion constructora
function carro (marca,modelo,color){
    this.marca=marca
    this.modelo=modelo
    this.color=color
}
//generamos bucle para obtener datos al azar
for(i=0;i<30;i++){
let marcaArray=["toyota","suzuki","ferrari","bmw","lamborghini","mazda"] //array con lista de marcas
    const elementMarca = Math.floor(Math.random()*marcaArray.length);    //indice random de marcas
let modeloArray=[2015,2016,2017,2018,2019,2020]                          //array con lista de modelo
    const elementModelo = Math.floor(Math.random()*modeloArray.length)   //indice random de modelo
let colorArray=["negro","blanco","azul","rojo","amarillo","azul"]        //array con lista color
    const elementColor = Math.floor(Math.random()*colorArray.length)     //indice random color

//genero variables para almacenar mi marca, modelo y color 
    let marcaRandom=marcaArray[elementMarca]
    let modeloRandom=modeloArray[elementModelo]
    let colorRandom=colorArray[elementColor]

//Aqui genero cada uno de los carros y lo introduzco en el array autos    
    var auto=new carro(marcaRandom,modeloRandom,colorRandom)
    var agregarauto=autos.push(auto)
}
console.log (autos)