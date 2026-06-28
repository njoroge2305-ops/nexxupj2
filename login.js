import { app } from "./firebase-config.js";

import {

    getAuth,

    signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const auth = getAuth(app);

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