var frame = document.getElementById("frame")
var url = document.getElementById("url")
var hidingDiv = document.getElementById("hidingDiv")

function loadFrame() {
    if (url.value.includes("https://") || url.value.includes("https://")) {
        frame.src = url.value
    } else {
        frame.src = "https://" + url.value
    }
    hidingDiv.style.display = "none"
    frame.style.display = "block"
}