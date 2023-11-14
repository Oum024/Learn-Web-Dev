//event handlers

function myFunction() {
    console.log('clicked  eventhandler');
}

const mouseOver = () => {
    console.log(mouseOver);
}

const keyPressEvent = () => {
    console.log('key pressed event handler');
}

const keyUpEvent = () => {
    console.log('key up pressed event handler');
}

const keyDownEvent = () => {
    console.log('key down pressed event handler');
}

//event listeners

const box1 = document.getElementById('box-1');
box1.addEventListener('click' , () => {        //callback function
    console.log('click event');
});

box1.addEventListener('click' , (e) => {     //e is object of event it has full info about this event and it will display also
    console.log('using 2 click event at same time' . e);
});

box1.addEventListener('mousemove' , (e) => {        
    console.log('mouse position ' , e.clientX , e.clientY);
});

const nm = document.getElementById('nameInput');
nm.addEventListener('keypress' , (e) => {
    console.log('Key :' , e.key);
});


nm.addEventListener('focus' , (e) => {
    console.log('focus ' ,e);
});

//use capture

const container = document.getElementById('container');
container.addEventListener('click' , (e) => {
    console.log('capture true ' , e);
} , true);