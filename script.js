const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });
});

window.addEventListener("scroll", function(){

const nav = document.querySelector("nav");

if(window.scrollY > 50){
    nav.style.background = "#000";
}
else{
    nav.style.background = "#111";
}

});
