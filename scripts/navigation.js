const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
