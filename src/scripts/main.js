
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

/* Dropdown Menu */

document.addEventListener('DOMContentLoaded', function () {
    function setupDropdown(containerSelector, dropdownSelector) {
      const container = document.querySelector(containerSelector);
      const dropdown = container.querySelector(dropdownSelector);
  
      let isHovered = false;
  
      container.addEventListener('mouseenter', function () {
        isHovered = true;
        dropdown.classList.remove('hidden');
      });
  
      container.addEventListener('mouseleave', function () {
        isHovered = false;
        setTimeout(() => {
          if (!isHovered) {
            dropdown.classList.add('hidden');
          }
        }, 200);
      });
  
/*       dropdown.addEventListener('mouseenter', function () {
        isHovered = true;
      });
  
      dropdown.addEventListener('mouseleave', function () {
        isHovered = false;
        dropdown.classList.add('hidden');
      }); */
    }
  
    setupDropdown('.group', '.group .absolute');
    setupDropdown('.group-two', '.group-two .absolute');
    // Add more setupDropdown calls for each dropdown in your navigation
  });

/* Scroll animation */
let scrollItem = document.getElementById("scroll-item");

window.addEventListener("scroll", function () {
  scrollItem.classList.toggle("rotate", window.scrollY > 0);
});
