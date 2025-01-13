const hamburger= document.getElementById('hamburger');
const navMenu=document.getElementById('nav-menu');
const closeIcon=document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link=> 
    link.addEventListener("click", () =>{
        navMenu.classList.add('hidden')
    })
)


closeIcon.addEventListener("click", () =>{
    navMenu.classList.add('hidden')
})
hamburger.addEventListener("click", ()=>{
    navMenu.classList.remove('hidden')
})



// SCROLL UP
const scrollUp = () =>{
    const scrollUpbtn =document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpbtn.classList.remove("-bottom-1/2");
        scrollUpbtn.classList.add("bottom-4");
    }else{
        scrollUpbtn.classList.add("-bottom-1/2");
        scrollUpbtn.classList.remove("bottom-4");

    }
}
window.addEventListener('scroll',scrollUp)

// CHANGE BACKGROUND HEADER
const scrollHeader = () =>{
    const header =document.getElementById("header");

    if(this.scrollY >= 50){
     
        header.classList.add("border-b","border-secondaryColor");
    }else{
       
        header.classList.remove("border-b","border-secondaryColor");

    }
}
window.addEventListener('scroll',scrollHeader)

// TABS
let tabs = document.querySelectorAll('.tab');
let indicator=document.querySelector('.indicator');
const all=document.querySelectorAll('.menu__card');
const wired=document.querySelectorAll(".wired");
const wireless=document.querySelectorAll('.wireless');
const airpod=document.querySelectorAll('.Best-rated product');

indicator.computedStyleMap.width = tabs[0].getBoundingClientRect().width + "px";
indicator.computedStyleMap.left = tabs[0].getBoundingClientRect().left-tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click",() =>{
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.
        parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabval=tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = 'none'
        });

        if(tabval=='wired'){
            wired.forEach(item => {
                item.style.display = 'block'
            });
        } else if(tabval=='wireless'){
            wireless.forEach(item => {
                item.style.display = 'block'
            });
        } else if (tabval=='Best-rated product'){
            airpod.forEach(item => {
                item.style.display = 'block'
            });
        } else{
            all.forEach(item => {
                item.style.display = 'block'
            });
        }
        


    })
})

// DARK-LIGHT THEME
const html = document.querySelector("html");
const themeBtn =  document.getElementById("theme-toggle");
if(localStorage.getItem("mode")== "dark"){
    darkMode();
}
else{
    lightMode();
}

themeBtn.addEventListener("click", (e)=> {
    if(localStorage.getItem("mode")=="light"){
        darkMode();
    } else{
        lightMode();
    }
})
function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}