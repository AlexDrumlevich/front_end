console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailImage = document.querySelector(".details-image");
const detailTitle = document.querySelector(".details-title");

function setDetails(anchor) {
    detailImage.setAttribute("src", anchor.getAttribute("data-detail-image"));
    detailTitle.innerHTML = anchor.getAttribute("data-detail-title");
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i])
    })
}