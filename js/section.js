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
    document.getElementById(tabName).classList.add("active-tab")
}






var CvLinks = document.getElementsByClassName("cv-links")
var CvContents = document.getElementsByClassName("cv-contents")
document.querySelector(".closeCV").addEventListener("click", () =>{
    CvContent.classList.remove("active-cv")
})

function openCv(CvName) {

    for(CvContent of CvContents){
        CvContent.classList.remove("active-cv")
    }
    document.getElementById(CvName).classList.add("active-cv")
}








