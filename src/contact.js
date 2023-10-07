import navbar from "./navbar";
import clearPage from "./clear";
import decor2Image from "./img/decor2.jpg";


export default function contactPage(){
    clearPage();
    navbar();
    
    const content = document.querySelector("#content");
    
    const main = document.createElement("div");
    main.classList.add("main");
    
    const image = document.createElement("div");
    image.classList.add("image");

    const img = document.createElement("img");
    img.src = decor2Image;

    const textArea = document.createElement("div");
    textArea.classList.add("text-area");
    
    const title = document.createElement("h1");
    title.innerText = "Contact Us"
    const subtitile = document.createElement("h3");
    subtitile.innerText = "tel: +1 555 888 999 // email: info@restaurant.co";

    image.appendChild(img);
    textArea.appendChild(title);
    textArea.appendChild(subtitile);

    main.appendChild(image);
    main.appendChild(textArea);

    content.appendChild(main);

}

