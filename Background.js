chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "CHECK_CODE") {
        console.log("Received code for AI detection:", message.code);

        // here i have to create a ML model ,fetch the thing thorugh an api hmmm,  
        // pending ( date: march 3 / 03/2025)
        fetch("https://sample.com/detect", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ code: message.code })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({ result: data.is_ai_generated });
        })
        .catch(error => {
            console.error("Error checking code:", error);
            sendResponse({ result: "error" });
        });

        return true;  
    }
});
