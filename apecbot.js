// script.js
const chatbotBody = document.getElementById('chatbot-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const closeBtn = document.getElementById('close-btn');

// Function to add a message to the chat
function addMessage(message, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
  messageDiv.textContent = message;
  chatbotBody.appendChild(messageDiv);
  chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the bottom
}

// Send button click event
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, true);
    userInput.value = ''; // Clear input field

    // Simulate bot response (you can replace this with an API call)
    setTimeout(() => {
      addMessage('Thanks for your message! How can I assist you further?', false);
    }, 1000);
  }
});

// Close button click event
closeBtn.addEventListener('click', () => {
  alert('Chatbot closed. Feel free to reopen it anytime!');
  // You can add logic to hide the chatbot here
});

// Allow pressing Enter to send a message
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});