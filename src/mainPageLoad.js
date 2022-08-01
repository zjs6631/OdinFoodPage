const contentDiv = document.getElementById("content");

const mainContent = () => {
    const title = document.createElement('h1');
    title.innerHTML = "This Place Rocks!"
    document.body.appendChild(title);
};

export { mainContent };