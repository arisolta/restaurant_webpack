import navbar from "./navbar";
import clearPage from "./clear";
import capuccinoImage from "./img/capuccino.jpg";


export default function menuPage(){
    clearPage();
    navbar();
    
    const content = document.querySelector("#content");
    
    const main = document.createElement("div");
    main.classList.add("main");
    
    const image = document.createElement("div");
    image.classList.add("image");

    const img = document.createElement("img");
    img.src = capuccinoImage;

    const textArea = document.createElement("div");
    textArea.classList.add("text-area");
    
    const title = document.createElement("h1");
    title.innerText = "Our Menu"
    const coffee = document.createElement("h5");
    coffee.innerText = "Coffee  $5";

    const water = document.createElement("h5");
    water.innerText = "Water  $4"

    const sandwich = document.createElement("h5");
    sandwich.innerText = "Sadwich  $12"

    image.appendChild(img);
    textArea.appendChild(title);
    textArea.appendChild(coffee);
    textArea.appendChild(water);
    textArea.appendChild(sandwich);


    main.appendChild(image);
    main.appendChild(textArea);

    content.appendChild(main);

}