let term = document.getElementById("terminal-text")

// document.addEventListener('keydown', function (event) {
//     let termText = term.innerHTML
//     if (event.key.length == 1) {
//         termText = termText + event.key
//         term.innerHTML = termText
//     } else if (event.key == "Enter"){
//         termText = termText + "<br>[user@antilimit.dev ~]$ "
//         term.innerHTML = termText
//     } else if (event.key == "Backspace"){
//         termText = termText.slice(0, -1)
//         term.innerHTML = termText
//     }
//     document.getElementById("page-bottom").scrollIntoView()
// })

function renderInput(i) {
    term.innerHTML = prevCont + i
}

function sendCommand(i) {
    input = ""
    prevCont = prevCont + i + "<br>[user@antilimit.dev ~]$ "
    term.innerHTML = prevCont
}

let prevCont = "[user@antilimit.dev ~]$ "
let input = ""

document.addEventListener('keydown', function (event) {
    if (event.key.length == 1) {
        input = input + event.key
    } else if (event.key == "Enter") {
        sendCommand(input)
    } else if (event.key == "Backspace") {
        input = input.slice(0, -1)
    }
    console.log(input)
    renderInput(input)
    document.getElementById("page-bottom").scrollIntoView()
})
debugger