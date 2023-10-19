window.addEventListener('DOMContentLoaded', (event) => {
    const fullscreenMessage = document.querySelector('.fullscreen-message');

    function checkScreenSize() {
        if (window.innerWidth < 1440) {
            fullscreenMessage.style.display = 'block';
        } else {
            fullscreenMessage.style.display = 'none';
        }
    }

    checkScreenSize();

    window.addEventListener('resize', () => {
        checkScreenSize();
    });
});
