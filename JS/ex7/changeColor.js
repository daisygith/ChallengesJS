let color = 'white';

const button = document.getElementById('switch');

button.addEventListener('click',() =>{
    // color = color === 'white' ? 'black' : 'white';
    // document.body.style.background = color;
    document.body.classList.toggle('color');

})