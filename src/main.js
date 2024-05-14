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
    setTimeout(()=> paper.classList.remove('shadow-xl'), 1050);
    setTimeout(()=> topLeft.classList.add('animate-fold-corner'), 1000);
    setTimeout(()=> topRight.classList.add('animate-fold-corner'),2000);
    setTimeout(()=> bottomRight.classList.add('animate-fold-corner'), 3000);
    setTimeout(()=> bottomLeft.classList.add('animate-fold-corner'), 4000);
    setTimeout(()=> paper.classList.add('animate-spin-paper'), 5000);
    setTimeout(()=> image.src = images[index]['src'], 5000);
    setTimeout(()=> image.alt = images[index]['alt'], 5000);
    setTimeout(()=> topLeft.classList.add('animate-unfold-corner'), 8000);
    setTimeout(()=> topRight.classList.add('animate-unfold-corner'), 9000);
    setTimeout(()=> bottomRight.classList.add('animate-unfold-corner'), 10000);
    setTimeout(()=> bottomLeft.classList.add('animate-unfold-corner'), 11000);
    setTimeout(()=> paper.classList.add('shadow-xl'), 12000);
    setTimeout(()=> topLeft.classList.remove('animate-fold-corner'), 12000);
    setTimeout(()=> topRight.classList.remove('animate-fold-corner'), 12000);
    setTimeout(()=> bottomRight.classList.remove('animate-fold-corner'), 12000);
    setTimeout(()=> bottomLeft.classList.remove('animate-fold-corner'), 12000);
    setTimeout(()=> topLeft.classList.remove('animate-unfold-corner'), 12000);
    setTimeout(()=> topRight.classList.remove('animate-unfold-corner'), 12000);
    setTimeout(()=> bottomRight.classList.remove('animate-unfold-corner'), 12000);
    setTimeout(()=> bottomLeft.classList.remove('animate-unfold-corner'), 12000);
    setTimeout(()=> paper.classList.remove('animate-spin-paper'), 12000);
}

function iterateMagic() {
    paperMagic(0);
    setTimeout(()=> paperMagic(1), 15000);
    setTimeout(()=> paperMagic(2), 30000);
    setTimeout(()=> paperMagic(3), 45000);
    setTimeout(()=> paperMagic(4), 60000);
    setTimeout(()=> paperMagic(5), 85000);
}