var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")


function openTab(tabName) {
    for(tabLink of tabLinks){
        tabLink.classList.remove("add-link")
    header.classList.remove('active');
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("add-link")
    // header.classList.add('active');
    document.getElementById(tabName).classList.add("active-tab")
}