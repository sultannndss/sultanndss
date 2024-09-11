setTimeout(function () {
    alert("Selamat datang di toko online kami");
}, 3000);
const herotext =document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "3357FF"];
let colorindex = 0;

function changeherotextcolor() {
    herotext.getElementsByClassName.color = colors{colorindex}
    colorindex = (colorindex + 1) % colors.length
}

setInterval(changeherotextcolor, 2000);
let currentimageindex = 0;
const images = ["img/bg.jpg", "img/shoe1.png", "img/shoe2.png"];

function changeheroimage() {
currentimageindex = (currentimageindex + 1) % images.length;
document.querySelector(
"#hero"
).style.backroundimage = url('${images[currentimageindex')
}