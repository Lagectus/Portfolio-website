
let professionElement = document.getElementById('profession');
let professions = ['Web Developer', 'Coder', 'Web Designer'];
let currentProfessionIndex = 0;
let charIndex = 0;

function typeProfession() {
    let currentProfession = professions[currentProfessionIndex];
    if (charIndex < currentProfession.length) {
        professionElement.textContent += currentProfession.charAt(charIndex);
        charIndex++;
        setTimeout(typeProfession, 100); 
    } else {
        setTimeout(eraseProfession, 1000); 
    }
}

function eraseProfession() {
    if (charIndex > 0) {
        professionElement.textContent = professionElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseProfession, 50); 
    } else {
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
        setTimeout(typeProfession, 500);
    }
}

typeProfession();
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

