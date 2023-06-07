// Connect to the chat server
const socket = io.connect('http://your-chat-server-url');

// DOM elements
const messages = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('sendButton');

// Event listener for send button click
sendButton.addEventListener('click', () => {
  const message = input.value;
  if (message.trim() !== '') {
    // Send the message to the server
    socket.emit('chatMessage', message);
    input.value = '';
  }
});

// Event listener for receiving messages from the server
socket.on('chatMessage', (message) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight; // Scroll to bottom
});
