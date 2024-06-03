const btn = document.querySelector(`button`);
const h2 = document.querySelector(`h2`);

const randomColor = () => {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener(`click`, () => {
    
    const body = document.querySelector(`body`);
    body.style.backgroundColor = randomColor();

    h2.textContent = randomColor();
})