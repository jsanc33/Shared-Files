const form = document.getElementById('entry-form');
const errorElement = document.getElementById('error');

const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        errorElement.textContent = 'Please complete the form.';
        return;
    }

    const entry = {
        username,
        title,
        content
    };

    storeLocalStorage(entry);
    redirectPage('blog.html');
};

form.addEventListener('submit', handleFormSubmit);
