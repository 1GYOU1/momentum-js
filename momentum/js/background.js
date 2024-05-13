const bgImage = document.querySelector(".wrap");

const images = ["bg_img_1.jpg", "bg_img_2.jpg", "bg_img_3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.style.backgroundImage = `url(img/${chosenImage})`;