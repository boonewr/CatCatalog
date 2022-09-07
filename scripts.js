title = document.getElementById("bodytitle");
arrow = document.getElementById("navigatorarrow");

window.addEventListener("scroll", function () {
    arrow.style.opacity = "0";
});


vh = window.innerHeight / 100;

mainTitle = document.getElementById("mainpagetitle");
mainTitle.addEventListener("click", function () {
    console.log("autoscrolled");
    // thank you https://stackoverflow.com/questions/28977498/smooth-scroll-using-window-scrollby
    window.scrollBy({
        behavior: "smooth",
        left: 0,
        top: (90 * vh)
    });
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
    if (searchBox.value == "") {
        for (let i = 0; i < searchLinks.length; i++) {
            searchLinks[i].relevance = 0;
        }
    } else {

        for (let i = 0; i < searchLinks.length; i++) {
            searchLinks[i].relevance = calcSearch("" + searchLinks[i].id, searchBox.value, parseInt(searchLinks[i].relevance));
            //console.log("relevance of search link " + i + ": " + searchLinks[i].relevance + " the name of which is: " + searchLinks[i].id);
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
        searchLinks[i].style.top = ((itemHeight + vh * 2) * i) + (vh * 12) + "px";
    }
}