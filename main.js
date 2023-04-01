let term = document.getElementById("terminal-text")

document.addEventListener('keydown', function (event) {
    let termText = term.innerHTML
    if (event.key.length == 1) {
        termText = termText + event.key
        term.innerHTML = termText
    } else if (event.key == "Enter"){
        termText = termText + "<br>"
        term.innerHTML = termText
    } else if (event.key == "Backspace"){
        termText = termText.slice(0, -1)
        term.innerHTML = termText
    }
})