const menuBtn = document.getElementsByClassName("menu-btn");
const menuList = document.getElementsByClassName("menu-list")[0];
const voidMenu = document.getElementsByClassName("void-menu")[0];

for (let i = 0; i < menuBtn.length; i++) {
  const twoButton = menuBtn[i];

  twoButton.addEventListener("click", () => {
    if (menuList.classList.contains("activeMenu")) {
      menuList.classList.remove("activeMenu");
      voidMenu.classList.remove("active-void-menu");
    } else {
      menuList.classList.add("activeMenu");
      voidMenu.classList.add("active-void-menu");
    }
  });
}

voidMenu.addEventListener("click", () => {
  menuList.classList.remove("activeMenu");
  voidMenu.classList.remove("active-void-menu");
});
