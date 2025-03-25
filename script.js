
let professionElement = document.getElementById('profession');
let professions = ['Web Developer', 'Coder', 'Web Designer'];
let currentProfessionIndex = 0;
function changeProfession() {
    professionElement.textContent = professions[currentProfessionIndex];
    currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
}
changeProfession();
setInterval(changeProfession, 2000);
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

