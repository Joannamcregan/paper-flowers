const paper = document.getElementById('paper');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomLeft = document.getElementById('bottomLeft');
const bottomRight = document.getElementById('bottomRight');
const image = document.getElementById('image');

const images = [{src: './images/flower0.jpg', alt: 'a smiling young boy in a blue graphic t-shirt holds a paper flower'}, 
{src: './images/flower1.jpg', alt: 'a smiling young boy in a black graphic t-shirt holds three paper flowers'}, 
{src: './images/flower2.jpg', alt: 'a smiling young boy in a blue graphic t-shirt holds three paper flowers'}, 
{src: './images/flower3.jpg', alt: 'a smiling young boy in a black graphic t-shirt looks to the side at the three paper flowers he is holding'}, 
{src: './images/flower0.jpg', alt: 'a smiling young boy in a blue graphic t-shirt looks up while holding a paper flower'}, 
{src: './images/flower0.jpg', alt: 'a smiling young boy in a black graphic t-shirt looks to the side while holding three paper flowers'}
];

document.addEventListener('DOMContentLoaded', iterateMagic());

function paperMagic(index) {
    console.log(index);
    setTimeout(()=> paper.classList.remove('shadow-xl'), 950);
    setTimeout(()=> topLeft.classList.add('animate-fold-corner'), 900);
    setTimeout(()=> topRight.classList.add('animate-fold-corner'),4500);
    setTimeout(()=> bottomRight.classList.add('animate-fold-corner'), 10000);
    setTimeout(()=> bottomLeft.classList.add('animate-fold-corner'), 14500);
    setTimeout(()=> paper.classList.add('animate-spin-paper'), 19500);
    setTimeout(()=> image.src = images[index]['src'], 20000);
    setTimeout(()=> image.alt = images[index]['alt'], 20000);
    setTimeout(()=> topLeft.classList.add('animate-unfold-corner'), 23500);
    setTimeout(()=> topRight.classList.add('animate-unfold-corner'), 28000);
    setTimeout(()=> bottomRight.classList.add('animate-unfold-corner'), 32500);
    setTimeout(()=> bottomLeft.classList.add('animate-unfold-corner'), 37000);
    setTimeout(()=> paper.classList.add('shadow-xl'), 42000);
    setTimeout(()=> topLeft.classList.remove('animate-fold-corner'), 42000);
    setTimeout(()=> topRight.classList.remove('animate-fold-corner'), 42000);
    setTimeout(()=> bottomRight.classList.remove('animate-fold-corner'), 42000);
    setTimeout(()=> bottomLeft.classList.remove('animate-fold-corner'), 42000);
    setTimeout(()=> topLeft.classList.remove('animate-unfold-corner'), 42000);
    setTimeout(()=> topRight.classList.remove('animate-unfold-corner'), 42000);
    setTimeout(()=> bottomRight.classList.remove('animate-unfold-corner'), 42000);
    setTimeout(()=> bottomLeft.classList.remove('animate-unfold-corner'), 42000);
    setTimeout(()=> paper.classList.remove('animate-spin-paper'), 42000);
}

function iterateMagic() {
    paperMagic(0);
    setTimeout(()=> paperMagic(1), 43000);
    setTimeout(()=> paperMagic(2), 86000);
    setTimeout(()=> paperMagic(3), 129000);
    setTimeout(()=> paperMagic(4), 172000);
    setTimeout(()=> paperMagic(5), 215000);
}