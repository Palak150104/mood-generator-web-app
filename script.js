const button = document.getElementById("generate");
const shareButton = document.getElementById("share");
const mood = document.getElementById("mood");
const resetButton = document.getElementById("reset");
const emojiContainer = document.getElementById("emoji-container");

let randomMood = "";
let randomMessage = "";

const moods = [
    "Happy 😄",
    "Sleepy 😴",
    "Chaotic 🤪",
    "Motivated 🔥",
    "Hungry 🍕"
];

const message = document.getElementById("message");

const messages = [
    "You're having a good day!",
    "You need coffee. Immediately.",
    "Hmm, feels like going out of line.",
    "If I can not they who can?",
    "I need fooddddddddd!!!"
];

const colors = [
    "lightblue",
"lightpink",
"lavender",
"lightgreen",
"peachpuff"
];

button.addEventListener("click", function() {
    button.textContent = "✨ Reading your mood...";

    setTimeout(function() 
    {
    const randomIndex = Math.floor(Math.random()*moods.length);
    randomMood = moods[randomIndex];
    mood.textContent = randomMood;

    mood.style.animation = "none";
    mood.offsetHeight;
    mood.style.animation = "pop 0.4s";

    randomMessage = messages[randomIndex];
    message.textContent = randomMessage;

    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;

    button.textContent = "Tell me my mood";

    celebrate();

    }, 500);

});

shareButton.addEventListener("click", function() {

    if (randomMood === "")
    {
        message.textContent = `Generate your mood first! 😄`;
        return;
    }

    const shareText = `My mood today is ${randomMood} — ${randomMessage}`;

    navigator.share({
        text: shareText
    });

});

resetButton.addEventListener("click", function() {
    mood.textContent = "Your mood will appear here";
    message.textContent = "Click the button!";
    document.body.style.backgroundColor = "white";
    button.textContent = "Tell me my mood";

    randomMood = "";
    randomMessage = "";
});

function celebrate() {
    emojiContainer.innerHTML = "";
    const emojis = ["🎉", "✨", "🥳", "😂", "💖", "🔥", "😎", "💫"];

    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement("span");

        emoji.classList.add("falling-emoji");

        const randomEmoji = Math.floor(Math.random() * emojis.length);

        emoji.textContent = emojis[randomEmoji];

        emoji.style.left = Math.random() * 100 + "%";

        emoji.style.animationDuration = 2 + Math.random() * 3 + "s";

        emoji.style.fontSize = 20 + Math.random() * 30 + "px";

        emojiContainer.appendChild(emoji);
    }
}