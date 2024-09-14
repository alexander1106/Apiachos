let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselInner = document.querySelector('.cont-inner-carousel');

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function currentSlide(index) {
  showSlide(index - 1);
}

function autoSlide() {
  currentIndex++;
  showSlide(currentIndex);
  setTimeout(autoSlide, 5000); // Cambia cada 5 segundos
}

showSlide(currentIndex);
autoSlide();
