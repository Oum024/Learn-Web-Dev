// Immediately Invoked Function Expressions (IIFE)



//named IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   /* first () is for function and second () is for execution */


// unnamed IFFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')