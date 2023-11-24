//arrow function

const greet = (count) =>
{
    for(let i = 0 ; i < count ; i++) 
    console.log('Hello World');
};

greet(5); // calling the function 

const square = (num) => num*num;
console.log(square(3));

//callback function

//method 1

const calculate = (a , b , operation) => 
{
    return operation(a , b);
};

const addition = calculate(3 , 4 ,function(num1 , num2)
{
   return num1 + num2;
}
);

console.log ('addition :',addition);

//method 2 

const substraction = (a, b) => a - b;

const subresult = calculate(8 , 3 , substraction);

console.log('Substraction :',subresult);

//method 3 

function multiply(a , b)
{
    return a * b;
}

const mulresult = multiply(10 , 20 , multiply);

console.log('Multiply :' ,mulresult);

//array callback function

const a = [4 , 1 , 6 , -2 , -5 , 3 , 2 , -8 , 6 , 7];

const firstNeg = (num) => num < 0;
const result = a.find(firstNeg);
console.log(result);  // op -2 as it is 1st negative number

const firstNegIndx = (num) => num < 0;
const resultIndx = a.findIndex(firstNegIndx);
console.log(resultIndx);  // op -2 as it is 1st negative number at 3rd index 

a.forEach((num , i) => console.log('Array :',num , 'Index :',i));   //each num in array will be printed





const user = {
    username: "oum",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "oum"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "oum"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "oum"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "oum"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

