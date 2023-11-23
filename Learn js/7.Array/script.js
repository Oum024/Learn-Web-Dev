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

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //* spread method to combine 2 or more array

//* we use spread method as we can add more than 2 array in it as concat add only 2 array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // arrry in array with another array in array

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Oum")) // check is Oum is array or not
console.log(Array.from("Oum"))  //* convert Oum into Array
console.log(Array.from({name: "Oum"})) // interesting(this is in form of key and value form) return enpty array
 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // convert score  1,2,3 into onre single array o/p [100,200,300]