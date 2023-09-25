//entendiendo mejor map y filter 
//son metodos para recorrer, en este caso sirven
//para obtener propiedades especificas de objetos en un array
var articulos= [
    {nombre :'cama',precio:1000000},
    {nombre:'limpiavidrios',precio:5000},
    {nombre:'almuerzo',precio:11000},
    {nombre:'weed',precio:6000},
    {nombre:'esponja',precio:1500}
]
//filter genera un nuevo array,no modifica el original.verifica si algo es true o false

//tenemos que crear una nueva variable donde  va a estar el nuevo array de "filter"
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio<=7000      //filtra los que cumplen la condicion
})
articulosFiltrados

//METODO MAP

var articulosPesados=[
    {nombre:"martillo",pesoEnKg:3},
    {nombre:"piedra",pesoEnKg:1},
    {nombre:'moneda de mil',pesoEnKg:0.1},
    {nombre:'pala',pesoEnKg:9}
]
//map no modifica el array que ya tengo, asi que me toca
//hacer una variable donde guardara map
var usandoMap = articulosPesados.map(function(article){
    return article.nombre
})

usandoMap