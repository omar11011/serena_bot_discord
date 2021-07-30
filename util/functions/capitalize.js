const capitalize = string => {
    const result = []

    string = string.toLowerCase().split(" ")

    for(let i = 0; i < string.length; i++) {
        result.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }

    return result.join(" ")
}

module.exports = capitalize