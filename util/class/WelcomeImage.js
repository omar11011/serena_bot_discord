const Base = require('./Canvas')

const { join } = require('path')
const { readdir } = require('fs')
const { MessageAttachment } = require('discord.js')

class WelcomeImage extends Base {

    constructor(x, y) {
        super(x, y)

        this.send = require('../functions/createWelcome')
        
        this.create = async (client, member, data) => {
            const url = '../../client/public/img/welcome/'

            readdir(join(__dirname, url), async (err, folder) => {
                let imageURL = client.config.client.url + 'img/welcome/'
                let background = imageURL

                if(folder.includes(member.guild.id + '.png')) background += member.guild.id + '.png'
                else background += 'default.png'

                await this.loadImage(0, 0, this.lienzo.width, this.lienzo.height, background)
                await this.loadImage(0, 0, this.lienzo.width, this.lienzo.height, imageURL + 'themes/' + data.theme + '.png')

                this.ctx.strokeStyle = "#ffffff"
                this.ctx.lineWidth = 25
                this.ctx.arc(960, 380, 300, 0, Math.PI * 2, true)
                this.ctx.fill()
				this.ctx.stroke()

                this.ctx.beginPath()
                this.ctx.arc(960, 380, 300, 0, Math.PI * 2, true)
                this.ctx.closePath()
                this.ctx.clip()
                await this.loadImage(660, 80, 600, 600, member.user.displayAvatarURL({ format: 'jpg', size: 2048 }))

                const attachment = new MessageAttachment(this.lienzo.toBuffer(), 'welcome.png')

                try {
                    return this.send(client, member, data, attachment)
                } catch {
                    return console.log('No pude enviar una bienvenida.')
                }
            })
        }
    }

}

module.exports = WelcomeImage