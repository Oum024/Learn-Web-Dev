console.log('hello');

setTimeout(function(){
    console.log('Execute later');
}, 3000);    //executed after 3 sceond

console.log('world');

console.log('three');

//callback hell

function getCheese(callback)
{
    setTimeout(() => 
    {
        const cheese = '🧀' ;
        console.log('Here is a Cheese :', cheese);
        callback(cheese);
    } , 2000);
}

function makeDough(cheese , callback)
{
    setTimeout(() => 
    {
        const dough = cheese + '🫓' ;
        console.log('Here is a dough:', dough);
        callback(dough);
    } , 2000);
}

function bakePizzza(dough , callback)
{
    setTimeout(() => 
    {
        const pizza = dough + '🍕' ;
        console.log('Here is a Pizza :', pizza);
        callback(pizza);
    } , 2000);
}

getCheese((cheese) => 
{
    makeDough(cheese , (dough) => 
    {
        bakePizzza(dough, (pizza) =>
        {
            console.log('got pizza :',pizza);
        });
    });
});