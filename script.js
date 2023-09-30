fetch('https://api.adviceslip.com/advice').then(data=>data.json()).then(adviceData=>{
    const adviceText = adviceData.slip.advice;
    const adviceElement = document.getElementById('adviceElement');

    adviceElement.innerHTML = adviceText;
})

// Function to set the theme based on user preference
function setTheme(darkMode) {
    const root = document.documentElement;

    if (darkMode) {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--border-color', 'darkblue');
        root.style.setProperty('--toggle-border-color', 'white');
        root.style.setProperty('--toggle-text-color', 'white');
        root.style.setProperty('--content-background-color', 'darkblue');
    } else {
        root.style.setProperty('--background-color', 'aliceblue');
        root.style.setProperty('--text-color', 'blue');
        root.style.setProperty('--border-color', 'lightblue');
        root.style.setProperty('--toggle-border-color', 'blue');
        root.style.setProperty('--toggle-text-color', 'blue');
        root.style.setProperty('--content-background-color', 'aliceblue');
    }
}

// Check if user preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial theme
setTheme(isDarkMode);

// Toggle theme when the button is clicked
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';

darkModeToggle.addEventListener('click', () => {
    const darkMode = !isDarkMode;
    localStorage.setItem('darkMode', darkMode);
    setTheme(darkMode);
    darkModeToggle.innerText = darkMode ? 'Light Mode' : 'Dark Mode';
});
