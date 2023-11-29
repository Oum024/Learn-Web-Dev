const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// creating promise without storing it (above promise is created)

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})     // passing object 
    }, 1000)
})

promiseThree.then(function(user){    // receiveing object
    console.log(user);
})




// error wala promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {           //! in this another then we get what above then() is returning only this is called thenable
    console.log(username);
}).catch(function(error){     // error block executed only when error occur
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))   // always executed  at end





// fullfilled promise with async in place of then(),catch()

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){     
// async wait for promise to fullfilled then start execution of code until it make program wait and if error occur then it tells at that moment only
    try {
        const response = await promiseFive  // with async we need to use await to consume/procee promise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()  // execute promise




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  // await is used as it takes time to convert it into object
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// tryc -> try catch emmet

// above promise in then() 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.