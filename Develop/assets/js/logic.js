// Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const currentMode = localStorage.getItem('mode') || 'light';

    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('mode', mode);
        });
    }
});

// Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = () => {
    const data = localStorage.getItem('journalEntries');
    return data ? JSON.parse(data) : [];
};

// Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = (newEntry) => {
    const entries = readLocalStorage();
    entries.push(newEntry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
};

// Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};