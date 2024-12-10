// Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back-button');

// Create a function that builds an element and appends it to the DOM
const buildElement = (tag, className, innerHTML) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
};

// Create a function that handles the case where there are no blog posts to display
const noPostsMessage = () => {
    const message = buildElement('p', 'no-posts', 'No blog posts to display.');
    mainElement.appendChild(message);
};

// Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = () => {
    const entries = readLocalStorage();
    if (entries.length === 0) {
        noPostsMessage();
        return;
    }

    entries.forEach(entry => {
        const article = buildElement('article', 'blog-post');
        const title = buildElement('h3', null, entry.title);
        const content = buildElement('p', null, entry.content);
        const author = buildElement('p', null, `<strong>Author:</strong> ${entry.username}`);

        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(author);
        mainElement.appendChild(article);
    });
};

// Call the `renderBlogList` function
renderBlogList();

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
if (backButton) {
    backButton.addEventListener('click', () => {
        redirectPage('index.html');
    });
}
