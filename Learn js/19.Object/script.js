
// Object.create

//! object declaration using literals

const mySym = Symbol("key1")  // creating symbol


const JsUser = {     //@object value is in key and value pair
    name: "Oum",
    "full name": "Oum Patel",
    [mySym]: "mykey1",   // initialize symbol with value
    age: 18,
    location: "pij",
    email: "oum@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]   //we can add various data type inside single object
}

// console.log(JsUser.email)  //generally we use this for printing object
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // print symbol

JsUser.email = "oum@chatgpt.com"
// Object.freeze(JsUser)  // with freeze we cannot change or alter value of Object 'JsUser' further
JsUser.email = "oum@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //  : this -> get all properties of object 'JsUser'
}

console.log(JsUser.greeting());   //  o/p Hello JS User
console.log(JsUser.greetingTwo());  //  o/p  Hello Js user,Oum





//! object declaration using constructor (singleton object)



const tinderUser = new Object()   //declare using constructor
// const tinderUser = {}  //declare using literal

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                                       //nested object inside object
        userfullname: {                        //nested object  insid nested object
            firstname: "Oum",
            lastname: "patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // o/p -> Oum
// console.log(regularUser.fullname?.userfullname.firstname);  //  ? -> use to check is that variable is available or not  

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // {} -> we use this to get output in this target empty array not in obj1

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "oum@gmail.com"
    },
    {
        id: 1,
        email: "oum@gmail.com"
    },
    {
        id: 1,
        email: "oum@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




//destructor the object

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Oum"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // do same as above comment method does
// course -> object name  , courseInstructor ->value to acces , instructor ->to call vairable name


// console.log(courseInstructor);  // o/p -> Oum 
console.log(instructor); // o/p -> Oum

// api form of object
 

// {
//     "name": "oum",
//     "coursename": "js",
//     "price": "free"
// }


// api form of array
 
[
    {},
    {},
    {}
]