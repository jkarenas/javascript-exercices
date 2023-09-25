// function arrayDiff(a, b) {
//   const newArray = []
//   for (let i=0 ; i < a.length ;i++ ){
//     for(let j=0 ; j< b.length ; j++){
//       if(b[j]!=a[i]){
//         newArray.push(a[i])
//       }
//     }
//   }
// return newArray
// }



// console.log(arrayDiff([10,2],[10]))






// function justify(text, width) {
//   // Your code goes here
//   const words = text.split(' ');
//   console.log(words)
//   let result = [];  //to store the lines of the justified text
//   let line= []; //An array to hold the current line's words.
//   console.log(line)
//   let lineWidth = 0; //the total width of characters in the current line

//   for (let i =0 ; i<words.length; i++){
//     const word = words[i]
//     console.log(word)

//     if (lineWidth + line.length + word.length <= width){
//       line.push(word);
//       console.log(line)
//       lineWidth += word.length;
//       console.log(lineWidth)
//     }else {
//       const spacesNeeded = width - lineWidth;
//       let lineText = '';
//       if (line.length === 1) {
//         lineText = line[0];
//         lineText += ' '.repeat(spacesNeeded);
//       } else {
//         const spacesPerGap = Math.floor(spacesNeeded / (line.length - 1));
//         const extraSpaces = spacesNeeded % (line.length - 1);

//         for (let j = 0; j < line.length; j++) {
//           lineText += line[j];
//           if (j < line.length - 1) {
//             lineText += ' '.repeat(spacesPerGap + (j < extraSpaces ? 1 : 0));
//           }
//         }
//       }

//       result.push(lineText);
//       line = [word];
//       lineWidth = word.length;
//     }
//   }

//   result.push(line.join(' ')); // Last line without justification
//   return result.join('\n');
// }

// const elText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'
// justify(elText,30)



// function descendingOrder(n){
//   result= parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))

//   console.log(result)
// }

// descendingOrder(145263)





// String.prototype.toJadenCase = function (str) {

//   const toArray = this.split(' ')
//   console.log(toArray)

//   result=""
//   for (let i=0; i<toArray.length; i++){
//     const capitalized = toArray[i].charAt(0).toUpperCase() + toArray[i].slice(1)+" "
//     result += capitalized + ""
//     console.log(capitalized)
    
//   }
//   return result.trim()
// }


// const toCapitalized = "this is something to capitalize"
// console.log(toCapitalized.toJadenCase())


// function validatePIN (pin) {
//   let toNum = parseInt(pin)
//   let toNum2 = Number(pin)
//   console.log(toNum)
//   console.log(toNum2)
//   for(let i= 0 ; i<pin.length ; i++){
//     let char= pin.charAt(i)
//     console.log(char)
//     if((pin.length==4||pin.length==6)&& char!=NaN){
//       return true
//     }else{
//       return false
//     }
//   }
 
// }

// console.log(validatePIN("s1234"))
// console.log(validatePIN("11116p"))
// console.log(validatePIN("0000"))
// console.log(validatePIN("090909"))
// console.log(validatePIN("1111"))



function nbYear(p0, percent, aug, p) {
  // your code
let result=0
for(let i=0 ; i<p;  i++){

const year = result+p0*0.05+aug
result += year


}

console.log(result)
}



console.log(nbYear(1500, 5, 100, 5000))