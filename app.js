document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
    this.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Switch to Light Mode';
        } else {
            toggleButton.textContent = 'Switch to Dark Mode';
        }
    });
});
