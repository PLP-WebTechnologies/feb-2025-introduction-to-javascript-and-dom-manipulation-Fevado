// DOM Elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');
const mainTitle = document.getElementById('main-title');
const loginTitle = document.getElementById('login-title');
const changeStyleBtn = document.getElementById('change-style-btn');
const dynamicElementsContainer = document.getElementById('dynamic-elements');

// Login Form Submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    // Simple validation
    if (username === 'admin' && password === 'password') {
        showMessage('Login successful!', 'success');
        loginTitle.textContent = `Welcome, ${username}!`;
    } else {
        showMessage('Invalid username or password', 'error');
    }
});

// Change Page Style
changeStyleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is applied to update the button text
    if (document.body.classList.contains('dark-mode')) {
        changeStyleBtn.textContent = 'Light Mode';
        // Add dark mode styles dynamically
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.querySelector('header').style.backgroundColor = '#222';
        document.querySelector('footer').style.backgroundColor = '#222';
        loginTitle.style.color = '#35424a';
    } else {
        changeStyleBtn.textContent = 'Dark Mode';
        // Revert to original styles
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        document.querySelector('header').style.backgroundColor = '#35424a';
        document.querySelector('footer').style.backgroundColor = '#35424a';
    }
});

// Helper function to show messages
function showMessage(message, type) {
    messageElement.textContent = message;
    messageElement.className = type;
    
    // Clear message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.className = '';
    }, 3000);
}

// Initial dynamic content
mainTitle.textContent = 'LOGIN FORM';