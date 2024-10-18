document.getElementById("sendButton").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return; // Prevent empty messages

    const messagesContainer = document.getElementById("messages");

    // Create user message element
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput;
    messagesContainer.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Generate bot response based on user input
    const botResponse = getBotResponse(userInput.toLowerCase());

    // Simulate bot response with a delay
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.textContent = botResponse;
        messagesContainer.appendChild(botMessage);

        // Scroll to the bottom of the chat window
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000); // Simulate a delay for the bot response
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "what resources do you have?": "We have study guides, tutorials, and webinars available. Would you like to know more about a specific resource?",
        "how can i contact support?": "You can contact support through the 'Contact Us' link or by asking me questions directly. What do you need help with?",
        "what is the study group?": "The study group feature allows students to collaborate and learn together. Would you like to join one or create a new group?",
        "help with registration": "For registration help, please visit the 'Help' section or let me know what specific issue you're facing.",
        "thank you": "You're welcome! If you have any other questions, feel free to ask.",
        "bye": "Goodbye! Have a great day!",
        "what is the student support hub?": "The Student Support Hub provides resources, support, and community for students. How can I help you explore it?"
    };

    const defaultResponse = "I'm sorry, I didn't understand that. Can you please rephrase or ask something else?";

    return responses[input] || defaultResponse;
}