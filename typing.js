const messages = [
    "Initializing hacking environment...",
    "Loading Kali Linux modules...",
    "Running nmap scan on target...",
    "Bypassing firewall...",
    "Access granted ✔",
    "Welcome, I am Attacker"
];

let messageIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < messages[messageIndex].length) {
        typingElement.textContent += messages[messageIndex][charIndex];
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            messages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40);
    } else {
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", type);
