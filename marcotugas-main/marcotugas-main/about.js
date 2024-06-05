document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainSidebar = document.getElementById('main-sidebar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainSidebar.classList.toggle('active');
    });
});
