document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const totalItems = items.length;
  let currentIndex = 0;

  function showItem(index) {
    items.forEach(item => {
      item.style.transform = `translateX(-${index * 100}%)`;
    });

    // Actualiza los indicadores
    indicators.forEach((indicator, i) => {
      indicator.classList.remove('active');
      if (i === index) {
        indicator.classList.add('active');
      }
    });
  }

  // Inicializar el carrusel
  showItem(currentIndex);

  // Agregar eventos de clic a los botones de navegación
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    });
  }
});
