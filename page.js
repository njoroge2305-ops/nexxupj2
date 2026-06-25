document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Prevent the default form reload behavior
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Sample Login Validation
    if (email === "admin@example.com" && password === "password123") {
        errorMsg.style.display = "none";
        alert("Login Successful!");
         window.location.href = "https://njoroge2305-ops.github.io/nexxupj2/dashboard.html";
    } else {
        // Display validation feedback
        errorMsg.textContent = "Incorrect email or password.";
        errorMsg.style.display = "block";
    }
});