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
    divContent.appendChild(imgPrincipal);

    
    const tiraBox = document.querySelector(".icone");
    tiraBox.addEventListener("click", _ => {
        divMain.remove()
    });
}