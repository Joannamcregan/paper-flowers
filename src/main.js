const paper = document.getElementById('paper');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomLeft = document.getElementById('bottomLeft');
const bottomRight = document.getElementById('bottomRight');
const image = document.getElementById('image');

const images = ['flower0', 'flower1', 'flower2', 'flower3', 'flower4', 'flower5'];

document.addEventListener('DOMContentLoaded', iterateMagic());

function paperMagic(index, delay) {
    setTimeout(()=> paper.classList.remove('shadow-xl'), 1050);
    setTimeout(()=> topLeft.classList.add('animate-fold-corner'), delay);
    setTimeout(()=> topRight.classList.add('animate-fold-corner'), 5500);
    setTimeout(()=> bottomRight.classList.add('animate-fold-corner'), 10000);
    setTimeout(()=> bottomLeft.classList.add('animate-fold-corner'), 14500);
    setTimeout(()=> paper.classList.add('animate-spin-paper'), 19000);
    setTimeout(()=> image.src = './images/flower' + index + '.jpg', 19000);
    setTimeout(()=> topLeft.classList.add('animate-unfold-corner'), 23500);
    setTimeout(()=> topRight.classList.add('animate-unfold-corner'), 28000);
    setTimeout(()=> bottomRight.classList.add('animate-unfold-corner'), 32500);
    setTimeout(()=> bottomLeft.classList.add('animate-unfold-corner'), 37000);
    setTimeout(()=> paper.classList.add('shadow-xl'), 42000);
}

function iterateMagic() {
    paperMagic(0, 1000);
}