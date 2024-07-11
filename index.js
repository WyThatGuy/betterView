var frame = document.getElementById("frame")

window.onload = function () {
    if (window.location.href.includes("#")) {
        if (window.location.href.split("#", 2)[1].includes("https://") || window.location.href.split("#", 2)[1].includes("https://")) {
            frame.src = window.location.href.split("#", 1)[1]
        } else {
            frame.src = "http://" + window.location.href.split("#", 2)[1]
        }
    } else {
        frame.srcdoc = "<h1>Welcome to BetterView!</h1>\n<p>Add a # (hashtag) and then a link to the end of the URL above to access a website</P>"
    }
}