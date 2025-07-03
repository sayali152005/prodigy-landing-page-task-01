// Change navbar background on scroll
window.addEventListener('scroll', function () {
var navbar = document.getElementById('navbar');
if (window.scrollY > 50) {
navbar.style.background = '#000';
} else {
navbar.style.background = '#333';
}
});
