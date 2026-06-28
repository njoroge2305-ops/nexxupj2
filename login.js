// 1. Import the auth instance you created in your config file
import { auth } from "./firebase-config.js";

// 2. Import the login function from the Firebase CDN
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 3. Handle Form Submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "main.html";
        })
        .catch((error) => {
            document.getElementById("errorMsg").innerHTML = error.message;
        });
});