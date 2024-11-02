function visitorCounter() {
    // Use the Fetch API to send a GET request to the specified URL (API Gateway endpoint)
    fetch("https://o3u6mzl4yg.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text()) // Convert the response to text format (expected to be the visitor count)
        .then((body) => {
            // Insert the response (visitor count) into the HTML element with ID "visitor-counter"
            document.getElementById("visitor-counter").innerHTML = body;
    })
}