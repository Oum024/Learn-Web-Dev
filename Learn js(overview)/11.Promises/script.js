const ticket = new Promise(function (resolve, reject) {
    const isBoarded = false;
    if (isBoarded) {
        resolve("You are not in the Flight");
    } else {
        reject("Your flight has been cancelled");
    }
});

ticket 
  .then((data) => {
    console.log('wohoo,' , data);
   })
   .catch((data) =>
   {
    console.log('oh no,' , data);
   })
   .finally(() => 
   {
    console.log('for help contact here')
   });


//using with set time out function

function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🫓";
            // resolve(dough);
            reject("Bad cheese");
        }, 2000);
    });
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
}


// getCheese()
//     .then((cheese) => {
    //         console.log("here is the cheese", cheese);
    //         return makeDough(cheese);
    //     })
    //     .then((dough) => {
//         console.log("here is the dough", dough);
//         return bakePizza(dough);
//     })
//     .then((pizza) => {
//         console.log("here is the pizza", pizza);
//     })
//     .catch((data) => {
//         console.log("error occured", data);
//     })
//     .finally(() => {
//         console.log("Process ended");
//     });


// sync mthod used to sortend the same above code

async function orderPizza() {
    try {
        const cheese = await getCheese();   //await will wait until cheese is being made then move to next function
        console.log("here is the cheese", cheese);

        const dough = await makeDough(cheese);
        console.log("here is the dough", dough);

        const pizza = await bakePizza(dough);
        console.log("here is the pizza", pizza);
    } catch (err) {
        console.log("error occured", err);
    }
    console.log("Process ended");   //finally block
}

orderPizza();  // calling function