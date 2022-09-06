body = document.body;
html = document.documentElement;

height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


emptyFooter = document.getElementById("singlepage");
surbeyBox = document.getElementById("survey");

footerPosition = emptyFooter.getBoundingClientRect();
surveyPosition = surbeyBox.getBoundingClientRect();

window.addEventListener("load", function () {
    footerDistance = height - surveyPosition.bottom - (emptyFooter.clientHeight * 6.5);
    emptyFooter.style.marginTop = footerDistance + "px";
});