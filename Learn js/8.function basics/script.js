const a = 12;
const b = 4;
sum(a, b);
// const ab = a+b;
// console.log('A + B :',ab);

const c = 2;
const d = 24;
sum(c, d);
// const cd = c+d;
// console.log('C+ D :',cd);

const e = 5;
const f = 14;
sum(e, f);
// const ef = e+f;
// console.log('E + F :',ef);

function sum(a , b)
{
    const sum = a + b;
    console.log('Result : ', sum);
}

//function expression a function withouth a name

const square = function (num)
{
    return num * num;
}

console.log(square);  // in output will be whole function

console.log(square(5));

//nested function

function addSquare(a , b)
{
    function square(num)
    {
        return num * num;
    }
    return square(a) + square(b);
}

const g = addSquare(2 , 3);
const h = addSquare(3 , 4);

console.log(g);
console.log(h);






function sayMyName(){
    console.log("O");
    console.log("U");
    console.log("M");
    console.log("R");
    console.log("P");
    console.log("A");
    console.log("T");
    console.log("E");
    console.log("L");
}

//sayName           //refrences
// sayMyName()     //execution

// function addTwoNumbers(number1, number2){             // here it is call parameter

//     console.log(number1 + number2);        
// }

// addTwoNumber(4,5)    //here it is called arguments
 
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2   
    console.log('unreachable code')  //this line will never executed as it is written after return statement
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);                             


function loginUserMessage(username){    // (username="sam") to pass default value
    if(!username){    // if(username === undefined)
        console.log("PLease enter a username");
        return  // if conditio is executed it will not go ahead and executed outer return stmt
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice( ...num1){       //when we dont know how many argument user will pass 
    //  '...' is know as rest operator and spread operator
     return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

//function calCartPrice( va1,va2, ...num1){ 
//   return num1
//}
// console.log(calcCartPrice(200, 400, 500, 2000))  / o/p -> [500,2000] as 200 will be stored in va1 
 //                                                                         and 400 will be stored in va2.



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)  // pass object to function
handleObject({
    username: "sam",
    price: 399
})  // another way to pass object as an argument in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));   // pass array to function
console.log(returnSecondValue([200, 400, 500, 1000]));  // another way to pass array as an argument in function