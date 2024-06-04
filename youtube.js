
            // Function to perform search on YouTube
            function performSearch(query) {
                const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                window.location.href = url;
            }
    
            // Handle search button click
            document.getElementById('search-button').addEventListener('click', () => {
                const query = document.getElementById('search-input').value;
                if (query) {
                    performSearch(query);
                }
            });
    
            // Handle enter key press in search input
            document.getElementById('search-input').addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const query = event.target.value;
                    if (query) {
                        performSearch(query);
                    }
                }
            });
    

  