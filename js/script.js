const images = ["../imagenes/Giveaway-inicio.jpg", "../imagenes/Giveaway-publi2.jpg"];

let currentIndex = 0;

function changeImage() {
  const imageElement = document.querySelector(".titulo img");
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2000);
