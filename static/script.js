// Function to search email
function sendEmail() {
    console.log("Search Email start");
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (input === '') {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    const maxResults = 20; // Maximum number of results to display
    let count = 0;
    
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].toLowerCase().includes(input)) {
            resultsDiv.innerHTML += `<li>${datas[i]}</li>`;
            count++;
        }

        if (count === maxResults) {
            break; // Stop once maxResults is reached
        }
    }

    if (count === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
    console.log("All script done");
}
