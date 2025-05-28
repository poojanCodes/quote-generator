const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

// Function to fetch quote
async function getQuote() {
  quoteText.textContent = 'Loading...';
  authorText.textContent = '';

  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = 'Failed to fetch quote.';
    authorText.textContent = '';
    console.error('Error:', error);
  }
}

// Load a quote when the page loads
getQuote();

// Load a new quote when button is clicked
newQuoteBtn.addEventListener('click', getQuote);
