const con = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    con.appendChild(div);
}

function determineW(num) {
    let newWidth = 500 / num;
    return newWidth;
}

function changeColor(e) {
    this.classList.add('color');
}

function promptChange(e) {
    let newNum = prompt('Enter a number to change grid!');
    while (newNum >= 100) {
        newNum = prompt('Less than 100 please!')
    }
    createNewGrid(newNum);
}

function createNewGrid(num) {
    removeGrid();
    const width = determineW(num);
    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${width}px`
        con.appendChild(div);
    }
    addColor();
}

function removeGrid() {
    const elements = document.getElementsByClassName('grid');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function addColor() {
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseenter', changeColor));
}

let divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mouseenter', changeColor));

const button = document.querySelector('button');
button.addEventListener('click', promptChange);