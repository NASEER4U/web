const carouselElement = document.getElementById('heroCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 5000, // Time between slides in milliseconds
  ride: 'carousel' // Automatically start the carousel when the page loads
});