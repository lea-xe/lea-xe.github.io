
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden', !menu[j].classList.contains('hidden'));
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
                  menu[j].classList.add('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.add('hidden');
              }
          });
      }
  }
});

/* Dropdown Menu */

document.addEventListener('DOMContentLoaded', function () {
  const derHofContainer = document.querySelector('.group');
  const derHofDropdown = derHofContainer.querySelector('.absolute');

  let isHovered = false;

  // Show dropdown when hovering over the container
  derHofContainer.addEventListener('mouseenter', function () {
    isHovered = true;
    derHofDropdown.classList.remove('hidden');
  });

  // Hide dropdown when leaving the container
  derHofContainer.addEventListener('mouseleave', function () {
    isHovered = false;
    setTimeout(() => {
      if (!isHovered) {
        derHofDropdown.classList.add('hidden');
      }
    }, 200);
  });

  // Show dropdown when entering the dropdown
  derHofDropdown.addEventListener('mouseenter', function () {
    isHovered = true;
  });

  // Hide dropdown when leaving the dropdown
  derHofDropdown.addEventListener('mouseleave', function () {
    isHovered = false;
    derHofDropdown.classList.add('hidden');
  });
});

/* Scroll animation */
let scrollItem = document.getElementById("scroll-item");

window.addEventListener("scroll", function () {
  scrollItem.classList.toggle("rotate", window.scrollY > 0);
});
