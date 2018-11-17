const page = document.querySelector('body');
const colors = ["blue", "yellow", "cyan", "red", "black", "pink", "green", "grey"];

page.style.background = colors[Math.floor(Math.random() * colors.length)];
