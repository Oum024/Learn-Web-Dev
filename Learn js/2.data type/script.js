let a=20; //number data type

console.log('value of a :',a);
console.log("value of a: ",a);
console.log('type of data type a is : ',typeof(a));

a='string';
console.log("value of a: ",a);
console.log('data type of a change to : ',typeof(a)); 

a=false;
console.log("value of a: ",a);
console.log('data type of is change again to:',typeof(a));

a=20;
a=String(a);  //convert to string from int 
console.log("value of a: ",a);
console.log('data type of a :',typeof(a)); 

a=Boolean(a);  //convrt to Boolean fron String
console.log("value of a: ",a);  //op will be true as any value other then 0 is true in boolean 
//and in string only empty value like str= "" is only false other all are true 
console.log('Data type of a :',typeof(a)); 

let b;
console.log('B value is : ',b);  //op will be undifined as we havent define  b

let c = null;
console.log('C value is : ',c);  //op will be null

let d='Not a Number'
d=Number(d);
console.log('D value id : ',d);  //op will be NaN as String converted into number

let e = 'null';
e=Number(e);
console.log('E value : ',e);  //op will be 0 

//new way to access string 

let str1="oum"
let str2="Patel"
console.log(`Name is ${str1} and last name ${str2}`);