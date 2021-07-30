const { join } = require('path')
const { readFileSync, readdir } = require('fs')

const sendEmbed = require('./sendEmbed')
const url = '../../client/public/img/'

const randomImage = (message, embed, command) => {
    readdir(join(__dirname, url + command), (err, folder) => {
        if(folder.length < 1) return

        const result = folder[Math.floor(Math.random() * folder.length)]
        const image = readFileSync(join(__dirname, url + command +'/' + result))

        embed.files = {
            attachment: image,
            name: result,
        }

        return sendEmbed(message, embed)
    })
}

module.exports = randomImage