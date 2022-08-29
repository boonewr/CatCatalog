title = document.getElementById("bodytitle");

addEventListener("scroll", checkScroll);

// Rough implementation. Learned about the scroll event from mozilla web docs
function checkScroll() {
    if (window.scrollY > 1000) {
        title.style.position = "fixed";
        title.style.top = "20vh";
    }
    if (window.scrollY < 1000) {
        title.style.position = "";
    }
    if (window.scrollY > 2400) {
        title.style.position = "relative";
        title.style.top = "1600px";
    }
}
