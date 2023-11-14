// const word = ['Hello', 'Bolo', 'Chalo', 1 ,2, true,
//  { 
//     name: 'Oum'
// }, 
//  function Hello() { 
//     console.log('Hello');
// }
// ];
// console.log(word);
// console.log(word[1]);
// console.log(word[10]);
// console.log('Total element in array :',word.length)

// const arr = word;
// arr[3] = 'Gayo';
// arr[4] = 1;

const arr = [4, 5, 6, 8, 7, 2, 0];

console.log('index of 8 :', arr.indexOf(8));

console.log('index of 100 :', arr.indexOf(100));

console.log('includes 8 :', arr.includes(8));

arr.push('Patel');    //add element at last index
console.log('after push of "Patel" : ', arr); 

arr.unshift('Oum');      //add element at 0th index
console.log('after unshift "Oum" : ', arr);   

arr.pop();         //removes last element
console.log('after pop :',arr);  

arr.shift();  //removes element at 0th index
console.log('after shift :',arr);

arr.sort();   //sort array in ascending 
console.log('after sort :',arr);

const slicearr = arr.slice(2,5);  // start extracting from 2 index to 4 index not 5 index
console.log('slice array :',slicearr);