var frame = document.getElementById("frame")

if (location.href.includes("#")) {
    if (location.href.split("#", 1)[1].includes("https://") || location.href.split("#", 1)[1].includes("https://")) {
        frame.src = location.href.split("#", 1)[1]
    } else {
        frame.src = "http://" + location.href.split("#", 1)[1]
    }
} else {
    frame.srcdoc = "<h1>Welcome to BetterView!</h1>\n<p>Add a # (hashtag) and then a link to the end of the URL above to access a website</P>"
}