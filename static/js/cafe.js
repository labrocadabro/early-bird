function changeContent() {
   hero.setAttribute("class", `hero-${this.id}-nav`);
   content.setAttribute("class", `content-nav`);
}

function removeContent() {
   hero.setAttribute("class", "hero-home");
   content.setAttribute("class", "content-home");
}

function updateLayout() {
   document.querySelector('main').style.display = "block";
   const notPhone = window.innerWidth > parseInt(tabletBP);
   // const isDesktop = window.innerWidth > parseInt(desktopBP);
   document.querySelector('header').style.display = notPhone ? "block" : "none";
}

function toggleMenu() {
   const menu = document.querySelector('header');
   const content = document.querySelector('main');
   if (getComputedStyle(menu).getPropertyValue("display") === "none") {
      menu.style.display = "block";
      content.style.display = "none";
   } else {
      menu.style.display = "none";
      content.style.display = "block";
   }
}
const tabletBP = window.getComputedStyle(document.documentElement).getPropertyValue('--tablet-bp');
const desktopBP = window.getComputedStyle(document.documentElement).getPropertyValue('--desktop-bp');
const menu_links = document.querySelectorAll("nav.home li");
const hero = document.querySelector("#hero");
const content = document.querySelector("#content");


if (document.querySelector("nav.home ul")) {
   for (link of menu_links) {
      link.addEventListener("mouseover", changeContent);
   }
   document.querySelector("nav.home ul").addEventListener("mouseout", removeContent);
}
document.querySelector('#mobile-menu').addEventListener('click', toggleMenu);
addEventListener('resize', updateLayout);

updateLayout();



