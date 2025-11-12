    document.addEventListener("DOMContentLoaded", () => {
      const track = document.querySelector('.carousel-track');
      const cards = document.querySelectorAll('.carousel-card');
      const totalCards = cards.length;
      const visibleCards = 3;
      let index = 0;

      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');

      function updateCarousel() {
        track.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;
      }

      nextBtn.addEventListener('click', () => {
        if (index < totalCards - visibleCards) index++;
        updateCarousel();
      });

      prevBtn.addEventListener('click', () => {
        if (index > 0) index--;
        updateCarousel();
      });

      // 🔹 Touch-swipe kezelés
      let startX = 0;
      let endX = 0;

      track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
      track.addEventListener('touchmove', e => endX = e.touches[0].clientX);
      track.addEventListener('touchend', () => {
        const deltaX = endX - startX;
        const minSwipeDistance = 50;
        if (Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX < 0 && index < totalCards - visibleCards) index++; // balra húzás
          else if (deltaX > 0 && index > 0) index--; // jobbra húzás
          updateCarousel();
        }
      });
    });