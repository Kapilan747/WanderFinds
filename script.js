document.addEventListener('DOMContentLoaded', function () {
    const storedHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
    const highlightGrid = document.querySelector('.highlight-grid');
  
    storedHighlights.forEach((highlight) => {
      const newCard = createHighlightCard(highlight.title, highlight.review, highlight.imageUrl);
      highlightGrid.appendChild(newCard);
    });
  });
  
  document.getElementById('highlightForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = document.getElementById('title').value.trim();
    const review = document.getElementById('review').value.trim();
    const imageUrl = document.getElementById('image').value.trim();
  
    if (title && review && imageUrl) {
      const newCard = createHighlightCard(title, review, imageUrl);
  
      document.querySelector('.highlight-grid').appendChild(newCard);
  
      const storedHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
      storedHighlights.push({ title, review, imageUrl });
      localStorage.setItem('highlights', JSON.stringify(storedHighlights));
  
      document.getElementById('highlightForm').reset();
  
      alert('New highlight added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  
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
  