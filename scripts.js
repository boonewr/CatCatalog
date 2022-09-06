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




// -------------------------------------- Search Function! ----------------------------------------
//  helpful:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 
// I am baffled that this all works


class SearchItem {
    constructor(item, relevance) {
        this.item = item;
        this.relevance = relevance;
    }

    get item() {
        return this.item;
    }

    get relevance() {
        return this.relevance
    }

    set relevance(relevance) {
        this.relevance = relevance;
    }
}



// sid = new SearchItem("Sid", 0);
// ember = new SearchItem("Ember", 0);
// biscuit = new SearchItem("Biscuit", 0);
// emmett  = new SearchItem("Emmett", 0);
// lucy = new SearchItem("Lucy", 0);

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