const moment = require('moment')

const antiquity = (type, start, end = new Date()) => {
    const startDate = moment(start)
    const currentDate = moment(end)
    const result = currentDate.diff(startDate, type)

    return result
}

module.exports = antiquity