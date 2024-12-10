// js
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      console.log("Class 'scrolled' added");
    } else {
      navbar.classList.remove("scrolled");
      console.log("Class 'scrolled' removed");
    }
  });
  

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

