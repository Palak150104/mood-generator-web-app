# ✨ Mood Generator

A fun and interactive mood generator built using HTML, CSS, and vanilla JavaScript.

Click the button to generate a random mood, message, and background color. Each mood generation also triggers a colorful emoji celebration animation.

## 🚀 Live Demo

[View Live Demo](#)

> Replace the `#` with your GitHub Pages URL after deployment.

## 📸 Preview

<img width="2880" height="1505" alt="Screenshot (500)" src="https://github.com/user-attachments/assets/e56c4bc4-0500-4fcb-b854-08ab5e2a2d73" />


## ✨ Features

- 🎲 Generates a random mood
- 💬 Displays a matching random message
- 🎨 Changes the background color dynamically
- 🎉 Creates an emoji celebration animation
- 📍 Random emoji positions
- 📏 Random emoji sizes
- ⏱️ Random emoji falling speeds
- ✨ Mood pop animation
- ⏳ Loading effect using `setTimeout()`
- 📤 Share mood using the Web Share API
- 🔄 Reset functionality
- 🛡️ Validation before sharing
- 📱 Clean and responsive user interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- DOM Manipulation
- CSS Animations
- Web Share API

## 🧠 JavaScript Concepts Practiced

This project helped me practice:

- Variables using `const` and `let`
- Arrays
- Array indexing
- Functions
- `Math.random()`
- `Math.floor()`
- DOM selection
- `textContent`
- Event listeners
- `addEventListener()`
- Conditional statements
- Early returns
- Template literals
- Variable scope
- `setTimeout()`
- Dynamic element creation
- `createElement()`
- `appendChild()`
- `classList`
- Inline style manipulation
- Browser APIs

## 🎨 How It Works

### 1. Generate a Mood

When the user clicks **Tell me my mood**, JavaScript:

1. Generates a random array index.
2. Selects a random mood.
3. Selects a matching message.
4. Changes the background color.
5. Triggers the mood animation.
6. Starts the emoji celebration.

### 2. Emoji Celebration

The application dynamically creates multiple emoji elements using JavaScript.

Each emoji receives:

- A random horizontal position
- A random size
- A random falling speed

CSS animations then make the emojis fall across the screen.

### 3. Share Mood

The application uses the browser's Web Share API to share the generated mood and message.

If no mood has been generated yet, the application asks the user to generate one first.

### 4. Reset

The reset button restores the application to its initial state.

## 📂 Project Structure

```text
mood-generator/
│
├── index.html      # Page structure
├── style.css       # Styling and animations
├── script.js       # Application logic
├── README.md       # Project documentation
└── .gitignore      # Git ignored files

