document.getElementById('submitButton').addEventListener('click', function() {
    var textInput = document.getElementById('textInput').value;
    var result = document.getElementById('result');

    // URL of your Azure Function
    const functionUrl = 'https://sampathpujari677ravi.azurewebsites.net/api/HttpTrigger1?';

    // Create the request body
    const requestBody = {
        textInput: textInput
    };

    // Make the request to your Azure Function
    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Use text() to handle non-JSON responses
    })
    .then(text => {
        try {
            const data = JSON.parse(text); // Parse the text response as JSON
            result.textContent = 'Data received: ' + JSON.stringify(data);
        } catch (error) {
            result.textContent = 'Error parsing JSON: ' + error.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        result.textContent = 'Error: ' + error.message;
    });
});
