let navItems = document.querySelectorAll(".nav-item");

// this function is for removing the active class from the nav items
const changeActiveNavItem = () => {
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
};

// this function adds the active class and calls the function to remove the class from other nav items
navItems.forEach((navItem) => {
  navItem.onclick = () => {
    changeActiveNavItem();
    navItem.classList.add("active");
  };
});
