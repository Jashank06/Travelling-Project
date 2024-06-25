// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hero-images img');
    let currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});
