const commands = {
    "help": handleHelpCommand,
    "log": handleLogCommand,
    "rm": handleRmCommand
}

export function handleInput(input) {
    if (input.trim().length == 0) {
        return "you"
    }

    const command = commands[input.trim().split(' ')[0].toLowerCase()]
    if (command == undefined) {
        return "invalid command you idiot"
    }

    return command(input)
}

function handleHelpCommand(input) {
    return "no you"
}


function handleLogCommand(input) {
    const args = input.trim().split(' ').slice(1)
    return args.join(' ')
}

function handleRmCommand(input) {
    const args = input.trim().split(' ').slice(1)

    if (args.length < 1) {
        return "no"
    }

    if (args.indexOf("-rf") >= 0) {
        document.body.innerHTML = ""
        return
    }

    return "you idiot"
}