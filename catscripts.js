catThumnails = document.getElementsByClassName("catthumbnail");

// https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
body = document.body;
html = document.documentElement;

height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


emptyFooter = document.getElementById("singlepage");
bioDiv = document.getElementById("catdesc");

footerPosition = emptyFooter.getBoundingClientRect();
bioPosition = bioDiv.getBoundingClientRect();

window.addEventListener("load", function () {
    footerDistance = height - bioPosition.bottom - (emptyFooter.clientHeight * 6.5);
    emptyFooter.style.marginTop = footerDistance + "px";
});

for (let i = 0; i < catThumnails.length; i++) {
    catThumnails[i].addEventListener("load", function () {
        if ((window.innerWidth / window.innerHeight) >= 2) {
            catThumnails[i].style.width = "10vw";
            page.style.fontSize = "4vh";
        }

    })
};

catFullImages = document.getElementsByClassName("catfullimg");
grayOut = document.getElementById("grayout");
exitFull = document.getElementById("exitfullscreen");
navbar = document.getElementById("navbar");

for (let i = 0; i < catThumnails.length; i++) {
    catThumnails[i].addEventListener("click", function () {
        catFullImages[i].style.opacity = "1";
        catFullImages[i].style.top = "10vh";
        catFullImages[i].style.left = (html.offsetWidth - catFullImages[i].offsetWidth) / 2 + "px";
        console.log((html.offsetWidth - catFullImages[i].offsetWidth));
        grayOut.style.top = "0px";
        grayOut.style.opacity = "0.82";
        exitFull.style.top = "0px";
        navbar.style.zIndex = "initial";
    });
};

exitFull.addEventListener("click", function () {
    grayOut.style.top = "-100000px";
    grayOut.style.opacity = "0";
    exitFull.style.top = "-10000px";
    navbar.style.zIndex = "1";
    for (let i = 0; i < catFullImages.length; i++) {
        catFullImages[i].style.opacity = "0";
        catFullImages[i].style.top = "-10000vh";
    }
});