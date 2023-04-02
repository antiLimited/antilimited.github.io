let term = document.getElementById("terminal-text")


// test lmao
let commands = [
    {
        "cmd": "help",
        "params": null,
        "response": "help: You obviously know how to use this.<br>pfp: Provides the link to an ascii art of my profile picture.<br>github: Provides the link to my github profile."
    },
    {
        "cmd": "pfp",
        "params": null,
        "response": "<a href=\"pfp.txt\">pfp.txt</a>"
    },
    {
        "cmd": "github",
        "params": null,
        "response": "<a href=\"https://github.com/antiLimited\">https://github.com/antiLimited</a>"
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
        sendCommand(input)
    } else if (event.key == "Backspace") {
        input = input.slice(0, -1)
        renderInput(input)
    }
    console.log(input)
    document.getElementById("page-bottom").scrollIntoView()
})