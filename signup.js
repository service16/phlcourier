<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sign Up - PHL Express</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>body { font-family: 'Poppins', sans-serif; }</style>
</head>
<body class="bg-gray-950 text-gray-100 flex items-center justify-center min-h-screen">

<div class="bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-xl w-full max-w-md">
<div class="text-center mb-6">
<h1 class="text-2xl font-bold tracking-wider text-yellow-500">PHL<span class="text-white">EXPRESS</span></h1>
<p class="text-sm text-gray-400 mt-1">Create your customer account</p>
</div>

<form id="signup-form" class="space-y-4">
<div>
<label class="block text-sm text-gray-400 mb-1">Full Name</label>
<input type="text" id="fullname" required placeholder="John Doe" class="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white focus:border-yellow-500 outline-none">
</div>
<div>
<label class="block text-sm text-gray-400 mb-1">Email Address</label>
<input type="email" id="email" required placeholder="name@example.com" class="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white focus:border-yellow-500 outline-none">
</div>
<div>
<label class="block text-sm text-gray-400 mb-1">Password</label>
<input type="password" id="password" required placeholder="••••••••" class="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white focus:border-yellow-500 outline-none">
</div>
<button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition">Sign Up</button>
</form>

<p class="text-xs text-center text-gray-400 mt-4">
Already have an account? <a href="login.html" class="text-yellow-500 hover:underline">Log in</a>
</p>
</div>

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyBdqx9cOtXv5Si1MMrwnPxDoVkJWdYSd4",
authDomain: "phl-express.firebaseapp.com",
projectId: "phl-express",
storageBucket: "phl-express.firebasestorage.app",
messagingSenderId: "561028625183",
appId: "1:561028625183:web:ceb8ba2452a79ecdffb62a",
measurementId: "G-838P851DXJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
e.preventDefault();
const fullName = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {
const userCredential = await createUserWithEmailAndPassword(auth, email, password);
const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {
fullName: fullName,
email: email,
createdAt: new Date()
});

alert("Account created successfully!");
window.location.href = "dashboard.html";
} catch (error) {
alert("Error: " + error.message);
}
});
</script>
</body>
</html>
