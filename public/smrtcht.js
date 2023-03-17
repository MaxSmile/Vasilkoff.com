import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAuth, signInAnonymously, onAuthStateChanged, updateProfile, updateEmail } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { httpsCallable, getFunctions } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-functions.js';

const firebaseConfig = {
    apiKey: "AIzaSyCO85HA4C5Wi0YWdjM4g8rBs9kJggPgXeE",
    authDomain: "vasilkoffcom-1532682115746.firebaseapp.com",
    databaseURL: "https://vasilkoffcom-1532682115746-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vasilkoffcom-1532682115746",
    storageBucket: "vasilkoffcom-1532682115746.appspot.com",
    messagingSenderId: "984244302774",
    appId: "1:984244302774:web:32d5800f25cebf27a48717",
    measurementId: "G-4SQX3RQYV3"
};

window.ms = () => {
    let chat = document.getElementById("chat");
    let messages = document.getElementById("messages");
    console.log(messages, chat, "ms", 0, chat.scrollHeight);
    messages.scrollTo(0, chat.scrollHeight);
    return chat.scrollHeight;
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log("firebaseApp", firebaseApp);
const auth = getAuth(firebaseApp);
const functions = getFunctions(firebaseApp);

console.log("auth", auth);
signInAnonymously(auth).then(() => {

    console.log("Authenticated anonymously");
    // Call the addMessage function with a parameter 'text'
    const addMessage = httpsCallable(functions, 'addMessage');
    document.getElementById('submit-btn').addEventListener('click', () => {
        var text = document.getElementById('text-input').value;
        if (text && text.trim() != "") {
            document.getElementById('chat').innerHTML += `<div class="msg msg--them">
    <blockquote>${text}</blockquote>
</div>`;
            document.getElementById('text-input').value = '';
            document.getElementById('submit-btn').disabled = true;
            updateProfile(auth.currentUser, {
                displayName: "John Smith"
            }).then(() => {
                console.log("Profile updated!");
                try {
                    addMessage({ text: text, model: "Model" }).then((result) => {
                        console.log("Function call result:", result.data);
                        document.getElementById('chat').innerHTML += `<div class="msg msg--me"><blockquote>${result.data.text}</blockquote></div>`;
                        document.getElementById('submit-btn').disabled = false;
                    }).catch((error) => {
                        console.error("Function call error:", error);
                    });
                } catch (e) { console.log("e", e); }
            }).catch((error) => {
                // An error occurred
                console.error("Function call error:", error);
            });

        }







    });
    // end of btn listener
}).catch((error) => {
    console.error("Authentication error:", error);
});