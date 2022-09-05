title = document.getElementById("bodytitle");

// window.addEventListener("scroll", checkScroll);


mainbody = document.getElementById("mainpagebody");
bodyheight = mainbody.offsetHeight;
bodyPosition = mainbody.getBoundingClientRect();
bodyTop = bodyPosition.top;
leftTitle = document.getElementById("bodytitle");
titleHeight = leftTitle.offsetHeight;
stopHeight = bodyTop - titleHeight;

function checkScroll() {
    if (window.scrollY > (0.9 * stopHeight)) {
        title.style.position = "fixed";
        title.style.top = "20vh";
        console.log(titleHeight + " ," + bodyTop + " ,,," + stopHeight);
        console.log("window x: " + window.screenX);
    }
    if (window.scrollY < 1000) {
        title.style.position = "";
    }
    if (window.scrollY > bodyPosition.bottom) {
        title.style.position = "relative";
        title.style.top = bodyPosition.bottom + "px";
    }

}