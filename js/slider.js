let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider__slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 10000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

document.querySelector('.slider__button--play').addEventListener('mouseenter', () => {
    stopAutoSlide();
    showSlide(0);
});

document.querySelector('.slider__button--learn').addEventListener('mouseenter', () => {
    stopAutoSlide();
    showSlide(1);
});

document.querySelector('.slider__button--watch').addEventListener('mouseenter', () => {
    stopAutoSlide();
    showSlide(2);
});

document.querySelector('.slider__button--play').addEventListener('mouseleave', () => {
    startAutoSlide();
});

document.querySelector('.slider__button--learn').addEventListener('mouseleave', () => {
    startAutoSlide();
});

document.querySelector('.slider__button--watch').addEventListener('mouseleave', () => {
    startAutoSlide();
});