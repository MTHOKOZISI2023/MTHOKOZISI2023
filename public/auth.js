// Get elements
const loginButton = document.getElementById('login_button');
const logoutButton = document.getElementById('logout_button');
const loginModal = document.getElementById('login_modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login_form');
const registerLink = document.getElementById('register_link');

// Open login modal
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close login modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Handle login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
        loginModal.style.display = 'none';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        alert(data.message);
    }
});

// Handle logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('token');
    alert('Logged out successfully');
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
});

// Check if user is already logged in
window.onload = () => {
    const token = localStorage.getItem('token');
    if (token) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    }
};