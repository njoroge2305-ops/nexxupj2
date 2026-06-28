import { app } from "./firebase-config.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const auth = getAuth(app);

const signupForm = document.getElementById("signupForm");
const errorMsg = document.getElementById("errorMsg");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            alert("Account created successfully!");

            // Redirect to login page
            window.location.href = "main.html";
        })
        .catch((error) => {
            errorMsg.textContent = error.message;
            errorMsg.style.display = "block";
        });
});