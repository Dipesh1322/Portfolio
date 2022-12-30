const btn = document.querySelector("button.mobileMenuButton");
const menu = document.querySelector(".mobileMenu");

btn.addEventListener("click",function (){
    menu.classList.toggle("hidden");
    menu.classList.toggle("box");
});
