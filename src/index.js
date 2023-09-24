console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailImage = document.querySelector(".details-image");
const detailTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const audio = document.getElementById("audio");
let counterDetailLauncher = 0;
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
    detailImage.setAttribute("src", anchor.getAttribute("data-detail-image"));
    audio.setAttribute("src", anchor.getAttribute("data-detail-audio"));
    detailTitle.innerHTML = anchor.getAttribute("data-detail-title");
}

function showDetails() {
    console.log("call showDetails()")
    counterDetailLauncher += 1;
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    });
    audio.pause();
    audio.play();
    setTimeout(function() {
        counterDetailLauncher -= 1;
        if(counterDetailLauncher == 0) {
            audio.pause();
        }
    }, 5000);

}

function hideDetails() {
    console.log("call hideDetails()")
    mainClass.classList.add(HIDDEN);
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i]);
        showDetails();
    })
}



