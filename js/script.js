// jq
const hoverImage = document.getElementById('hoverImage1');
const newImageSrc = "../images/Indoor_Plant-wt.png";
hoverImage1.addEventListener('mouseover', () => {
    hoverImage.src = newImageSrc;
});
hoverImage1.addEventListener('mouseout', () => {
    hoverImage.src = "../images/Indoor_Plant.png";
});