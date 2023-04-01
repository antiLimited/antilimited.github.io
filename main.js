document.addEventListener('keydown', function (event) {
    let termText = document.getElementById("terminal-text").innerHTML
    if (event.key.length == 1) {
        termText = termText + event.key
        console.log(event.key)
        document.getElementById("terminal-text").innerHTML = termText
    } else if (event.key == "Enter"){
        termText = termText + "<br>"
        console.log(event.key)
        document.getElementById("terminal-text").innerHTML = termText
    } else if (event.key == "Backspace"){
        termText = termText.slice(0, -1)
        console.log(event.key)
        document.getElementById("terminal-text").innerHTML = termText
    }
})