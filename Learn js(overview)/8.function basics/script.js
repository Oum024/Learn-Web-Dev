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