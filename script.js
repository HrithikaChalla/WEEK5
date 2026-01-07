const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 17) {
    greeting = "Good Afternoon"; 
    greeting = "Good Evening"; 

document.getElementById('greeting-message').innerHTML = `<h1>${greeting}!</h1>`;
