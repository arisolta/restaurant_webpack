import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";


export default function navbar(){
    const content = document.querySelector("#content");

    const nav = document.createElement("div");
    nav.classList.add("nav");

    const navbars = document.createElement("ul");
    
    const home = document.createElement("li");
    home.setAttribute("id", "home");
    home.textContent = "home";
    home.addEventListener("click", homePage);

    const menu = document.createElement("li");
    menu.setAttribute("id", "menu");
    menu.textContent = "menu";
    menu.addEventListener("click", menuPage);

    const contact = document.createElement("li");
    contact.setAttribute("id", "contact");
    contact.textContent = "contact";
    contact.addEventListener("click", contactPage);

    content.appendChild(nav);
    nav.appendChild(navbars);
    navbars.appendChild(home);
    navbars.appendChild(menu);
    navbars.appendChild(contact);

}