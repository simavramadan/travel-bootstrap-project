
window.addEventListener('load', function() {
  // Get all cards
  const cards = document.querySelectorAll('.card');
  
  // Find the maximum height
  let maxHeight = 0;
  cards.forEach(card => {
     maxHeight = Math.max(maxHeight, card.offsetHeight);
  });
  
  // Set the maximum height to all cards
  cards.forEach(card => {
    card.style.height = `${maxHeight}px`;
  });
});
