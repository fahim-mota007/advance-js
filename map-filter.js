 const numbers = [1,5,6,7,8]
// const output = [];


// for(let i=0; i<numbers.length; i++){
//     const element = numbers [i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element*element;
// }

// const square = element => element*element;
// const square = x => x*y ;

// const result = numbers.map(function(element){
//     return element*element;
// })

// const result = numbers.map(x => x*y);

// console.log(result);

const result = numbers.filter( x => x <5);

const isThere = numbers.find(x => x > 5);

console.log(isThere);