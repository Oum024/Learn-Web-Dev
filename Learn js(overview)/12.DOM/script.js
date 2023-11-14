// accessing using dom

const mybody = document.body;
console.log(mybody);  //acccessing body usin DOM 

const box2 = document.getElementById('box-2');  //accessing box 2 by id 
console.log(box2);   

const p = document.getElementsByTagName('p');
console.log(p);   //accessing p tag by tag name

const rdm = document.getElementsByClassName('random');
console.log(rdm);   //accessing all element with class random using class name

const randm = document.querySelectorAll('.container .random');
console.log(randm); //select all the element with random class inside container class and show them in array

//modifying using dom

const box1 = document.getElementById('box-1');
box1.innerHTML='<h1>DOM<h1>';  //insert h1 tage with text inside box 1 id element
box1.style.backgroundColor = 'red'; 


const boxes = document.getElementsByClassName('box');

for(let i = 0; i < boxes.length ; i++){
boxes[i].classList.add('round-border');
}
//add round-border class to all element witch has box class

box1.classList.remove('round-border');

// creating and append new element in js 

const texting = document.createElement('h3');
texting.innerText='add para tag  from js ';
texting.classList.add('box');

const container = document.getElementById('container');
container.appendChild(texting);