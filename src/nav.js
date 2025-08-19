export function toggleMenu(nav, navToggle, ...navHide) {
    const toggle = () => nav.classList.toggle("nav__open");
    const remove = () => nav.classList.remove("nav__open");
    navToggle.addEventListener("click", toggle);
    navHide.forEach(item => item.addEventListener("click", remove));
}


export function openSubMenu(navListSelector, navLink, navSubSelector, angleSelector) {
    navListSelector.forEach(item => {
        const link = item.querySelector(navLink);
        if (!link || !navSubSelector || !angleSelector) return;
        item.addEventListener("mouseenter", () => {
            navSubSelector.classList.add("open");
            angleSelector.classList.add("rotated");
        });
        item.addEventListener("mouseleave", () => {
            navSubSelector.classList.remove("open");
            angleSelector.classList.remove("rotated");
        });
    });
}



