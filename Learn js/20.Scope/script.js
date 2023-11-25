 //var c = 300
let a = 300
if (true) { 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    //var c=30 //c value will be change from 300 to 30
    
}



// console.log(a);   // shown as not define
// console.log(b);  // shown as not define
// console.log(c);   // it will be accessable


function one(){
    const username = "Oum"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Oum"
    if (username === "Oum") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   //cant access variable
}

// console.log(username);   // cant access variable


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   // o/p -> 6

function addone(num){
    return num + 1
}



addTwo(5)   // o/p -> error  cant access 'addTwo' before initialization
const addTwo = function(num){      // also known as expression
    return num + 2
}


