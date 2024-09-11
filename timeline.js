document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function scrollToCard(direction) {
      const cardWidth = cards[0].offsetWidth;
      const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => scrollToCard('prev'));
    nextBtn.addEventListener('click', () => scrollToCard('next'));
});
