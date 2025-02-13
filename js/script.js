window.addEventListener("resize", displayBurgerNavigationMenu);
let burgerMenuButton;
let burgerNavigationMenu;
let navigationMenu;

function invertImages(imgType){
    var colormodeimg = document.getElementsByClassName("colorModeImage");
    for(var j = 0; j < colormodeimg.length; j++){
        imgelement = colormodeimg[j];
        imgelement.src = "img/" + imgType + "Mode.png";
    }
}

function switchMode(currentMode){
    if(currentMode == "lightMode"){
        var elements = document.getElementsByClassName("lightMode");
        var element;
        for(var i = 0; i < elements.length; i++){
            element = elements[i];
            element.classList.add("darkMode");
            element.classList.remove("lightMode");
        }
        invertImages("dark");
    }
    else{
        var elements = document.getElementsByClassName("darkMode");
        for(var i = 0; i < elements.length; i++){
            element = elements[i];
            element.classList.add("lightMode");
            element.classList.remove("darkMode");
        }
        invertImages("light");
    }
}

function enableBurgerNavigationMenu(){
    if(burgerNavigationMenu.classList.contains("hidden")){
        burgerNavigationMenu.classList.add("visible");
        burgerNavigationMenu.classList.remove("hidden");
    }
    else{
        burgerNavigationMenu.classList.add("hidden");
        burgerNavigationMenu.classList.remove("visible");
    }
}

function displayBurgerNavigationMenu(){
    if(window.innerWidth > 600){
        console.log(window.innerWidth)
        if(burgerMenuButton.classList.contains("visible")){
            burgerMenuButton.classList.add("hidden");
            burgerMenuButton.classList.remove("visible");
        }
        if(burgerNavigationMenu.classList.contains("visible")){
            burgerNavigationMenu.classList.add("hidden");
            burgerNavigationMenu.classList.remove("visible");
        }
        if(navigationMenu.classList.contains("hidden")){
            navigationMenu.classList.add("visible");
            navigationMenu.classList.remove("hidden");
        }
    }
    else{
        if(burgerMenuButton.classList.contains("hidden")){
            burgerMenuButton.classList.add("visible");
            burgerMenuButton.classList.remove("hidden");
        }
        if(navigationMenu.classList.contains("visible")){
            navigationMenu.classList.add("hidden");
            navigationMenu.classList.remove("visible");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    burgerMenuButton = document.getElementById("burgerMenuButton");
    burgerNavigationMenu = document.getElementById("burgerNavigationMenu");
    navigationMenu = document.getElementById("navigationMenu");
    displayBurgerNavigationMenu();
});