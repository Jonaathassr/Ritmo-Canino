// --- ELEMENTOS PRINCIPAIS ---
const menu = document.getElementById("menu");
const toggleMenu = document.querySelector(".hamburguer");
const closeBtn = document.querySelector(".close-menu");
const mobileMenuLinks = document.querySelectorAll('#menu a');

// --- ABRIR MENU ---
toggleMenu.addEventListener("click", () => {
  menu.classList.add("show");
  closeBtn.classList.add("show");
  toggleMenu.classList.add("hide");
  document.body.classList.add("no-scroll"); // Impede rolagem
});

// --- FECHAR MENU ---
function closeMobileMenu() {
  menu.classList.remove("show");
  closeBtn.classList.remove("show");
  toggleMenu.classList.remove("hide");
  document.body.classList.remove("no-scroll"); // Libera rolagem
}

closeBtn.addEventListener("click", closeMobileMenu);

// --- SCROLL SUAVE E FECHAR MENU AO CLICAR EM LINK ---
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    closeMobileMenu();

    setTimeout(() => {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('img');
    imagens.forEach(img => {
      img.addEventListener('contextmenu', e => e.preventDefault());
    });
  });