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






// -------------------------------------- Search Function! ----------------------------------------

searchBox = document.getElementById("searchtext");
searchPanel = document.getElementById("searchpanel");
searchLink = document.getElementById("searchlink");
grayOut = document.getElementById("grayout");
navbar = document.getElementById("navbar");

const searchLinkss = document.getElementsByClassName("searchitem");
const searchLinks = Array.from(searchLinkss);

searchLink.addEventListener("click", showSearchPanel);
searchBox.addEventListener("input", calcRelevance);
vh = window.innerHeight / 100;
let test = "test";

function showSearchPanel() {
    grayOut.style.top = "0px";
    grayOut.style.opacity = "0.82";
    navbar.style.zIndex = "initial";
    searchPanel.style.display = "initial";
    searchBox.style.top = "5vh";
    itemHeight = searchLinks[0].offsetHeight;
    orderItems();
    for (let i = 0; i < searchLinks.length; i++) {
        searchLinks[i].relevance = 0;
    }
}

function calcRelevance() {
    // console.log('relevance calculating ' + test.length);
    // console.log("relevanec = " + calcSearch("loremipsum", "loremipsum"));
    // searchLinks[0].relevance = calcSearch("loremipsum", "loremipsum");
    // console.log("relevance of item 0: " + searchLinks[0].relevance);
    if (searchBox.value == "") {
        for (let i = 0; i < searchLinks.length; i++) {
            searchLinks[i].relevance = 0;
        }
    } else {

        for (let i = 0; i < searchLinks.length; i++) {
            searchLinks[i].relevance = calcSearch("" + searchLinks[i].id, searchBox.value, parseInt(searchLinks[i].relevance));
            console.log("relevance of search link " + i + ": " + searchLinks[i].relevance + " the name of which is: " + searchLinks[i].id);
        }
        searchLinks.sort((a, b) => {
            if (a.relevance < b.relevance) {
                return 1;
            }

            if (a.relevance > b.relevance) {
                return -1;
            }

            return 0;
        });
        orderItems();
    }
}

function calcSearch(item, value, initialRelevance) {
    let relevance = initialRelevance;
    let length = Math.max(item.length, value.length);
    for (let i = 0; i < length; i++) {
        if (value.charAt(i) == item.charAt(i)) {
            relevance += 1;
        }
    }
    return relevance;
}

grayOut.addEventListener("click", hideSearch)

function hideSearch() {
    grayOut.style.top = "-100000px";
    grayOut.style.opacity = "0";
    navbar.style.zIndex = "1";
    searchPanel.style.display = "none";
}

function orderItems() {
    for (let i = 0; i < searchLinks.length; i++) {
        // searchLinks[i].style.top = "calc(6vh + " + itemHeight * i + "px)";
        searchLinks[i].style.top = ((itemHeight + vh * 2) * i) + (vh * 12) + "px";
    }
}