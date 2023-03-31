let termText = document.getElementById("terminal-text").innerHTML

let keys = [
    
    {
        "key": "Enter", "text": "<br>"
    }
]

document.addEventListener('keydown', function(event) {
    for (let i in keys) {
        i = keys[i]
        if (i.key == event.key) {
            termText = termText + i.text
        }
    }
    console.log(event.key)
    document.getElementById("terminal-text").innerHTML = termText
})