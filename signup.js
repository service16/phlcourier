import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
// ... other config values
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
e.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const fullName = document.getElementById("fullname").value;

try {
const userCredential = await createUserWithEmailAndPassword(auth, email, password);
const user = userCredential.user;

// Save user profile in Firestore
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
