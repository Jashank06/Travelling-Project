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
document.addEventListener('DOMContentLoaded', () => {
    const purchasedMealsSection = document.querySelector('.purchased-meals .meal-details');

    // Example data (you may fetch this from a database or API)
    const purchasedMeals = [
        {
            planType: 'Standard',
            includedMeals: 'Breakfast, Lunch, Dinner',
            restaurants: ['Local Bistro', 'Taste of Italy', 'Sushi World']
        },
        {
            planType: 'Premium',
            includedMeals: 'All-inclusive gourmet meals',
            restaurants: ['Fancy Eats', 'Deluxe Dining']
        }
        // Add more objects for additional purchased plans
    ];

    // Function to generate HTML for each purchased meal plan
    function renderPurchasedMeals() {
        purchasedMeals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal-plan');

            mealElement.innerHTML = `
                <h3>${meal.planType}</h3>
                <p><strong>Included Meals:</strong> ${meal.includedMeals}</p>
                <p><strong>Restaurants:</strong></p>
                <ul>
                    ${meal.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                </ul>
            `;

            purchasedMealsSection.appendChild(mealElement);
        });
    }

    // Call the function to render purchased meal plans
    renderPurchasedMeals();
});

