// Load highlights from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    const storedHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
    const highlightGrid = document.querySelector('.highlight-grid');
  
    // Populate the grid with stored highlights
    storedHighlights.forEach((highlight) => {
      const newCard = createHighlightCard(highlight.title, highlight.review, highlight.imageUrl);
      highlightGrid.appendChild(newCard);
    });
  });
  
  // Form submission and saving to localStorage
  document.getElementById('highlightForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const title = document.getElementById('title').value.trim();
    const review = document.getElementById('review').value.trim();
    const imageUrl = document.getElementById('image').value.trim();
  
    if (title && review && imageUrl) {
      // Create a new highlight card
      const newCard = createHighlightCard(title, review, imageUrl);
  
      // Append the new card to the grid
      document.querySelector('.highlight-grid').appendChild(newCard);
  
      // Save to localStorage
      const storedHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
      storedHighlights.push({ title, review, imageUrl });
      localStorage.setItem('highlights', JSON.stringify(storedHighlights));
  
      // Clear the form inputs
      document.getElementById('highlightForm').reset();
  
      // Notify the user
      alert('New highlight added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  // Helper function to create a highlight card
  function createHighlightCard(title, review, imageUrl) {
    const newCard = document.createElement('div');
    newCard.classList.add('highlight-card');
    newCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${review}</p>
    `;
    return newCard;
  }
  