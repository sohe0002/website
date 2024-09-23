document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.getElementById('burger-menu');
    var menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
    
  });

