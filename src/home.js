import navbar from "./navbar";
import clearPage from "./clear";
import decor1Image from "./img/decor1.jpg";


export default function homePage(){
    clearPage();
    navbar();
    
    const content = document.querySelector("#content");
    
    const main = document.createElement("div");
    main.classList.add("main");
    
    const image = document.createElement("div");
    image.classList.add("image");

    const img = document.createElement("img");
    img.src = decor1Image;

    const textArea = document.createElement("div");
    textArea.classList.add("text-area");
    
    const title = document.createElement("h1");
    title.innerText = "Welcome to Cafe BomBom"
    const subtitile = document.createElement("h3");
    subtitile.innerText = "See our menu by clicking menu above or contact us";

    image.appendChild(img);
    textArea.appendChild(title);
    textArea.appendChild(subtitile);

    main.appendChild(image);
    main.appendChild(textArea);

    content.appendChild(main);

}

