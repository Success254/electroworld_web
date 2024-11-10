// search.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const searchResultsContainer = document.querySelector('#search-results'); // You'll need to add this div in your HTML to display results.

    // Add event listener for search input
    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length >= 3) { // Start searching after 3 characters are typed
            // Mock function for product search
            fetch(`/search?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    displaySearchResults(data);
                })
                .catch(error => console.error('Error fetching search results:', error));
        } else {
            searchResultsContainer.innerHTML = ''; // Clear results when query is too short
        }
    });

    // Function to display search results
    function displaySearchResults(results) {
        searchResultsContainer.innerHTML = '';
        results.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result-item');
            resultElement.innerHTML = `<a href="/product/${item.id}">${item.name}</a> - ${item.price}`;
            searchResultsContainer.appendChild(resultElement);
        });
    }
});
