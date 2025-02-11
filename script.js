function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;
    
    if (localStorage.getItem(username)) {
        alert("Username already exists!");
    } else {
        localStorage.setItem(username, password);
        alert("Registration successful!");
    }
}

// Login Function
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    
    if (localStorage.getItem(username) === password) {
        sessionStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "secure.html";
    } else {
        alert("Invalid username or password!");
    }
}

// Check Authentication for Secure Page
function checkAuth() {
    if (!sessionStorage.getItem("loggedInUser")) {
        alert("You must be logged in to access this page!");
        window.location.href = "index.html";
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}