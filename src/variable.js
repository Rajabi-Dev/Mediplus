const dataVariable = {};

const bomVariable = {
    body: document.body,
    loader: document.querySelector("#loader"),
    app: document.querySelector("#app"),
    navToggle: document.querySelector("#navMenuToggle"),
    navClose: document.querySelector("#navClose"),
    navMenu: document.querySelector("#navNavigation"),
    navHideMenu: document.querySelector("#navHideBlank"),
    navList: document.querySelectorAll("[data-sub='subMenu']"),
    navLink:  ".nav__link",
    navSub: document.querySelector(".nav__sub-navigation"),
    angle:document.querySelector(".angle"),
};

export default dataVariable;
export { bomVariable };
