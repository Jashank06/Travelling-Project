// scripts.js

// scripts.js
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelector('.slides');
let index = 0;

next.addEventListener('click', () => {
    index = (index < slides.children.length - 1) ? index + 1 : 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.children.length - 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const heroImages = document.querySelectorAll('.hero-images img');
    let currentHeroImageIndex = 0;

    function changeHeroImage() {
        heroImages[currentHeroImageIndex].classList.remove('active');
        currentHeroImageIndex = (currentHeroImageIndex + 1) % heroImages.length;
        heroImages[currentHeroImageIndex].classList.add('active');
    }

    setInterval(changeHeroImage, 5000); // Change hero image every 5 seconds

    const reservationImages = document.querySelectorAll('.image-container img');
    let currentReservationImageIndex = 0;

    function changeReservationImage() {
        reservationImages[currentReservationImageIndex].classList.remove('active');
        currentReservationImageIndex = (currentReservationImageIndex + 1) % reservationImages.length;
        reservationImages[currentReservationImageIndex].classList.add('active');
    }

    setInterval(changeReservationImage, 5000); // Change reservation image every 5 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const diningOptions = document.querySelectorAll('.dining-options .option');
    let currentIndex = 0;

    function showDiningOption(indexToShow) {
        diningOptions.forEach((option, index) => {
            if (index === indexToShow) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    }


});
