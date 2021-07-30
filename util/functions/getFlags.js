const getFlags = args => {
    const content = []

    for(let i = 0; i < args.length; i++) {
        const flag = args[i].split(" ")[0]
        content.push(flag.toLowerCase())
    }

    return content
}

module.exports = getFlags