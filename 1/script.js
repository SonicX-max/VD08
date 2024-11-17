document.getElementById('new-quote-button').addEventListener('click', fetchQuote);

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-text').textContent = data.content;
            document.getElementById('quote-author').textContent = `— ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote-text').textContent = 'An error occurred. Please try again later.';
            document.getElementById('quote-author').textContent = '';
        });
}

// Fetch a quote when the page loads
fetchQuote();