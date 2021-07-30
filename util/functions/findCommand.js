const findCommand = (name, commands) => {
    const result = []

    commands.map(c => {
        if(c.nombre == name || c.alias.includes(name)) result.push(c)
    })

    if(result.length < 1) return false

    return result[0]
}

module.exports = findCommand