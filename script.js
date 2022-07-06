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

let divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mouseenter', changeColor));

