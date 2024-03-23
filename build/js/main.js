const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('toggle-btn');
        hamburgerBtn.classList.add('spin');
        setTimeout(() => hamburgerBtn.classList.remove('spin'), 500);
        if (hamburgerBtn.classList.contains('toggle-btn')) {
            hamburgerBtn.classList.add('hide-middle-bar');
        } else {
            hamburgerBtn.classList.remove('hide-middle-bar');
        }
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);