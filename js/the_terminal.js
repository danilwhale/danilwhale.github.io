import { handleInput } from "./terminal_commands.js"

var terminalExists = false
var terminal
var input = ""

export function handleTerminalInput(key) {
    if (key == "`") {
        createTerminal()
        return
    }

    if (!terminalExists) {
        return
    }

    if (shouldIgnoreKey(key)) {
        return
    }

    if (key == "Backspace") {
        if (input.length > 0){
        input = input.substring(0, input.length - 1)
        terminal.textContent = terminal.textContent.substring(0, terminal.textContent.length - 1)}
        return
    }

    if (key == "Escape") {
        terminal.textContent = ""
        return
    }

    if (key == "Enter") {
        const result = handleInput(input)
        input = ""
        
        terminal.textContent += `\r\n${result}\r\n> `
        terminal.scrollTop = terminal.scrollHeight

        return
    }

    input += key;
    terminal.textContent += key
}

export function createTerminal() {
    if (terminalExists) {
        document.body.removeChild(terminal)
        terminalExists = false
        return
    }

    terminal = document.createElement('div')

    terminal.textContent = 
        "the shittiest terminal ever™\r\n" + 
        "version -5.3675.32443253436755342564\r\n" + 
        "mrrrp mrrow meeeow :3" + 
        "\r\n\r\n" + 
        "> "

    terminal.className = "terminal"

    document.body.appendChild(terminal)

    terminalExists = true
}

function shouldIgnoreKey(key) {
    if (key == "Control" || key == "Alt" || key == "Shift" || key == "Delete"   || key == "Insert" ||
        key == "Clear"   || key == "Home"|| key == "End"   || key == "CapsLock" || 
        (key.startsWith("F") && key.length >= 2) || 
        key.startsWith("Arrow") || key.startsWith("NumLock") || key.startsWith("Page")) {
        return true
    }
    return false
}