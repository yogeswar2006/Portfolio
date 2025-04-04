document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-section");
    const hamburger = document.getElementById("hamberger-menu");
    const icon = document.getElementById("hamberger-icon");

    let menuOpen = false;

    hamburger.addEventListener("click", function () {
        menuOpen = !menuOpen;
        if (menuOpen) {
            menu.style.display = "flex"; 
            
            icon.src = "images/error-svgrepo-com.svg"; 
            icon.style.width="30px";
        } else {
            menu.style.display = "none"; 
            icon.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"; 
        }
    });
});
