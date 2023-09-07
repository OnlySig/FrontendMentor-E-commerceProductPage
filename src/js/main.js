const abrirMenuMb = document.querySelector("#abrirIcon");
const fechaMenuMb = document.querySelector("#fechaIcon");
const menuMb = document.querySelector(".menuMobile");
const ativaBox = document.querySelector("#ativaBox");

abrirMenuMb.addEventListener("click", _ => {
    menuMb.classList.add("abrirMenu");
});

fechaMenuMb.addEventListener("click", _ => {
    menuMb.classList.remove("abrirMenu");
});

ativaBox.addEventListener("click", _ => {
    lightBox();
});


function lightBox() {
    const divMain = document.createElement("div");
    const divContent = document.createElement("div");
    const corpo = document.body
    const elementIcon = document.createElement("i");
    const imgPrincipal = document.createElement("img");
    const imgSecContainer = document.createElement("div");

    const imgSecItem1 = document.createElement("img");
    const imgSecItem2 = document.createElement("img");
    const imgSecItem3 = document.createElement("img");
    const imgSecItem4 = document.createElement("img");
    
    const iconeSlider1 = document.createElement("i");
    const iconeSlider2 = document.createElement("i");

    const imgSlider__container = document.createElement("div")

    imgSecItem1.src = "../../images/image-product-1-thumbnail.jpg"
    imgSecItem2.src = "../../images/image-product-2-thumbnail.jpg"
    imgSecItem3.src = "../../images/image-product-3-thumbnail.jpg"
    imgSecItem4.src = "../../images/image-product-4-thumbnail.jpg"

    imgSlider__container.classList.add("imgSlider__container");

    iconeSlider1.classList.add("fa-circle-chevron-left");
    iconeSlider1.classList.add("fa-solid");
    iconeSlider1.classList.add("p-ab");
    iconeSlider1.classList.add("pr-l");
    
    iconeSlider2.classList.add("fa-circle-chevron-right");
    iconeSlider2.classList.add("fa-solid");
    iconeSlider2.classList.add("p-ab");
    iconeSlider2.classList.add("pr-r");

    imgSecContainer.classList.add("imgSecContainer");
    imgPrincipal.classList.add("principalImg");
    imgPrincipal.src = "../../images/image-product-1.jpg"
    divContent.classList.add("light__content");
    elementIcon.classList.add("icone");
    elementIcon.classList.add("fa-solid");
    elementIcon.classList.add("fa-xmark");
    divMain.classList.add("high__container");
    
    corpo.append(divMain);
    divMain.appendChild(divContent);
    divContent.appendChild(elementIcon);
    imgSlider__container.appendChild(iconeSlider1);
    imgSlider__container.appendChild(imgPrincipal);
    imgSlider__container.appendChild(iconeSlider2);
    divContent.appendChild(imgSlider__container);
    divContent.appendChild(imgSecContainer);

    imgSecContainer.appendChild(imgSecItem1);
    imgSecContainer.appendChild(imgSecItem2);
    imgSecContainer.appendChild(imgSecItem3);
    imgSecContainer.appendChild(imgSecItem4);

    console.log(corpo)
    
    const tiraBox = document.querySelector(".icone");
    tiraBox.addEventListener("click", _ => {
        divMain.remove();
    });
}