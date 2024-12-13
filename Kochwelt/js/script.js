function toggleMobileMenu(){
    for (i of document.querySelectorAll(".mobile-button-group > img")) {
        i.classList.toggle("mobile-hidden");
    }
    const nav = document.querySelector(".mobile-nav-links > nav");
    nav.classList.toggle("nav-links-open");
}