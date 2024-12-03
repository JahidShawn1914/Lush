// js
const aboutItems = document.querySelectorAll('.about-item');

aboutItems.forEach(item => {
    const icon = item.querySelector('.icon');

    const originalImage = item.getAttribute('data-original');
    const hoverImage = item.getAttribute('data-hover');

    item.addEventListener('mouseenter', () => {
        icon.src = hoverImage;
    });

    item.addEventListener('mouseleave', () => {
        icon.src = originalImage;
    });
});

