let term = document.getElementById("terminal-text")

let commands = [
    {
        "cmd": "help",
        "params": null,
        "response": "Hello!"
    },
    {
        "cmd": "help2",
        "params": null,
        "response": "Hello!2"
    }
]

function renderInput(i) {
    term.innerHTML = prevCont + i
}

function sendCommand(i) {
    input = ""
    prevCont = prevCont + i
    let commandRan = false
    for (let iter in commands) {
        iter = commands[iter]
        if (iter.cmd == i) {
            prevCont = prevCont + "<br>" + iter.response
            commandRan = true
        }
    }
    if (commandRan == false) {
        prevCont = prevCont + "<br>Command not Found! Refer to \"help\" for a list of proper commands."
    }
    prevCont = prevCont + "<br>[user@antilimit.dev ~]$ "
    term.innerHTML = prevCont
}

let prevCont = "Run the command \"help\" for more information on this page.<br>[user@antilimit.dev ~]$ "
let input = ""

document.addEventListener('keydown', function (event) {
    if (event.key.length == 1) {
        input = input + event.key
        renderInput(input)
    } else if (event.key == "Enter") {
        //renderInput(input)
        sendCommand(input)
    } else if (event.key == "Backspace") {
        input = input.slice(0, -1)
        renderInput(input)
    }
    console.log(input)
    document.getElementById("page-bottom").scrollIntoView()
})