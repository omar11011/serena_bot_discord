const timeWait = require('./timeWait')

const startFree = 11
const endFree = 12

const timeBreed = (breed, data) => {
    const result = { open: false, time: null }
    const date = new Date()
    const hours = date.getHours()

    if(data.time > 0) {
        const lack = Math.round((data.time - Date.now()) / 1000)

        if(lack > 0) {
            result.open = true
            result.time = timeWait(lack)
        } else {
            data.time = 0
            breed.folderServer.establecer(breed.server, data)
        }
    } else {
        if(hours >= startFree && hours < endFree) {
            result.open = true
            result.time = timeWait((((endFree - startFree) * 60) - date.getMinutes()) * 60)
        }
    }

    return result
}

module.exports = timeBreed