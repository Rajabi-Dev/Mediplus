import dataVariable from "./variable.js";
import {bomVariable} from "./variable.js";
import {pageLoader} from "./loader.js";
import {toggleMenu  , openSubMenu} from "./nav.js";

window.addEventListener("load",function (){
pageLoader(bomVariable.loader,bomVariable.app)
    toggleMenu(bomVariable.navMenu,bomVariable.navToggle,bomVariable.navClose,bomVariable.navHideMenu)
    openSubMenu(bomVariable.navList,bomVariable.navLink,bomVariable.navSub,bomVariable.angle)

})