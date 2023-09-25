// let p = new Promise((resolve,reject)=>{
//     let a = 1 + 1 
//     if (a == 2) {
//         resolve('Success😂')
//     }else{
//         reject('Failed😥')
//     }
// })
// console.log(p)

// p.then((message)=>{
//     console.log('This is in the then ' + message)
// }).catch((message)=>{
//     console.log('This is in the catch ' + message)
// })








// const recordVideoOne = new Promise((resolve, reject)=>{
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject)=>{
//     resolve('Video 2 recorded')
// })

// const recordVideoThree = new Promise((resolve, reject)=>{
//     resolve('Video 3 recorded')
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ])
// .then((messages)=>{
//     console.log(messages)
// })





// const request = fetch('https://rickandmortyapi.com/api/character/1')
// console.log(request)




// PROMESA EN ESTADO NATURAL

const getCharacters = function () {
    fetch ('https://rickandmortyapi.com/api/character/3')
    .then((response)=> response.json())
    .then((loquesea)=> console.log(loquesea.name))
    .catch((error)=> console.log('he aqui nuestro error'))
};
getCharacters();



// const request = fetch('https://rickandmortyapi.com/api/character/1');
// console.log(request)