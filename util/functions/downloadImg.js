const request = require('request')

const { join } = require('path')
const { createWriteStream } = require('fs')

const download = (uri, filename, callback) => {
    request.head(uri, (err, res, body) => {
        request(uri).pipe(createWriteStream(join(__dirname, '../../client/public/img/' + filename))).on('close', callback)
    })
}

module.exports = download