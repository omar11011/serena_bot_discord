const timeWait = time => {
    const result = { days: 0, hours: 0, minutes: 0, seconds: 0, text: [] }

    if(time > 86400) {
        result.days = Math.floor(time / 86400)
        result.text.push(result.days + ' día' + (result.days == 1 ? '' : 's'))
        time -= (result.days * 86400)
    }
    if(time >= 3600 && time < 86400) {
        result.hours = Math.floor(time / 3600)
        result.text.push(result.hours + ' hora' + (result.hours == 1 ? '' : 's'))
        time -= (result.hours * 3600)
    }
    if(time >= 60 && time < 3600) {
        result.minutes = Math.floor(time / 60)
        result.text.push(result.minutes + ' minuto' + (result.minutes == 1 ? '' : 's'))
        time -= (result.minutes * 60)
    }
    if(time < 60 && time > 0) result.text.push(time + ' segundo' + (time == 1 ? '' : 's'))

    return result.text.join(", ")
}

module.exports = timeWait