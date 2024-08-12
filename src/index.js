// Swiper
let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menu = document.getElementById('menu-icon');
  let navbar = document.querySelector('.navbar');

  
  menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  })
  
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
