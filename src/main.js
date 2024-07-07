document.addEventListener("DOMContentLoaded", () => {
    const menuItem = document.querySelector(".navbar__menu-item");
    const menuItem2 = document.querySelector(".navbar__menu-item-2");
    const cursorBall = document.querySelector(".cursor-ball");
    const cursorOutline = document.querySelector(".cursor-outline");
  
    // Function to follow image cursor
    function followImageCursor(event, menuItem) {
      if (menuItem) {
        const contentBox = menuItem.getBoundingClientRect();
        const dx = event.pageX - contentBox.x;
        const dy = event.pageY - contentBox.y;
        if (menuItem.children[1]) {
          menuItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
        }
      }
    }
  
    // Add event listeners to menu items
    menuItem?.addEventListener("mousemove", (event) => {
      followImageCursor(event, menuItem);
    });
  
    menuItem2?.addEventListener("mousemove", (event) => {
      followImageCursor(event, menuItem2);
    });
  
    // Function to update cursor position
    function updateCursorPosition(e) {
      cursorBall.style.top = e.pageY + "px";
      cursorBall.style.left = e.pageX + "px";
      cursorOutline.style.top = e.pageY + "px";
      cursorOutline.style.left = e.pageX + "px";
    }
  
    // Add event listener to document for cursor movement
    document.addEventListener("mousemove", updateCursorPosition);
  
    // Add event listeners to menu items to hide and show cursor outline
    menuItem?.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("hidden");
    });
    menuItem?.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("hidden");
    });
  
    menuItem2?.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("hidden");
    });
    menuItem2?.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("hidden");
    });
  
    // Add event listeners to <a> tags to resize cursor outline
    document.querySelectorAll("a").forEach(aTag => {
      aTag.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("cursor-small");
      });
      aTag.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("cursor-small");
      });
    });
  });
  