const megadb = require('megadb')
const db = require('../../server/models')

const { load } = require('../functions/tempBan')
const { MessageCollector, MessageAttachment } = require('discord.js')

const Base = require('./Canvas')
const sendEmbed = require('../functions/sendEmbed')

class Captcha extends Base {

    constructor(x, y, user) {
        super(x, y)
        this.user = user
        
        this.folderCount = new megadb.crearDB('count', 'captcha')
        this.folderAttempts = new megadb.crearDB('attempts', 'captcha/')
        this.folderBan = new megadb.crearDB('ban', 'captcha')

        this.limitCount = 15
        this.limitAttempts = 3
        this.limitBan = 5
        this.waitTime = 3600

        this.exec = async (message, text) => {
            let status = null
            // message.channel.send(text)
            this.sendImg(message, text)
            let collector = new MessageCollector(message.channel, m => m.author.id == this.user, { time: 15000, max: 2 })
            collector.on('collect', async msg => {
                if(status) return
                const response = msg.content.toLowerCase()
                if(response == text) {
                    msg.react('☑️')
                    status = true
                    return message.reply('gracias por confirmar que no eres un robot!').then(m => {
                        setTimeout(() => {
                            m.delete()
                        }, 3000)
                    })
                }
                else {
                    msg.react('❌')
                    status = false
                    return await this.silence(message)
                }
            })
            setTimeout(async () => {
                if(status == null) return await this.silence(message)
            }, 15000)
        }

        this.generateText = length => {
            const letters = 'abcdefghijklmnñopqrstuvwxyz0123456789'
            const text = []
            for(let i = 0; i < length; i++) text.push(letters[Math.floor(Math.random() * letters.length)])
            return text.join("")
        }

        this.send = async () => {
            let result = false
            let attempts = await this.folderCount.obtener(this.user) || 0
            attempts++
            if(attempts > this.limitCount) attempts = 0, result = this.generateText(8)
            this.folderCount.establecer(this.user, attempts)
            return result
        }

        this.silence = async message => {
            const attempts = await this.userSilence()
            attempts.count++
            if(attempts.count >= this.limitAttempts) {
                attempts.count = 0
                attempts.silence = true
                attempts.end = Date.now() + (this.waitTime * 1000)
                
                const ban = await this.ban(message)
                if(ban) return message.reply('has sido baneado temporalmente por acumulación de sanciones, si quieres apelar a tu ban debes contactarte con algún miembro del equipo.')
                else message.reply('no podrás ejecutar ningún comando de economía durante una hora.')
            }
            return this.folderAttempts.establecer(this.user, attempts)
        }

        this.ban = async () => {
            let attempts = await this.folderBan.obtener(this.user) || 0
            attempts++
            if(attempts >= this.limitBan) {
                this.folderBan.eliminar(this.user)
                this.folderCount.eliminar(this.user)
                this.folderAttempts.eliminar(this.user)
                await db.trainer.update({ ban: true }, { where: { user: this.user } })
                await load(db)
                return true
            }
            else {
                this.folderBan.establecer(this.user, attempts)
                return false
            }
        }

        this.userSilence = async () => {
            const data = await this.folderAttempts.obtener(this.user) || { silence: false, count: 0, end: null }
            return data
        }

        this.notSilence = async data => {
            data.silence = false
            data.end = null
            this.folderAttempts.establecer(this.user, data)
        }

        this.sendImg = (message, text) => {
            this.textNeon({ x: 30, y: 50, size: 50, text: text })
            const attachment = new MessageAttachment(this.lienzo.toBuffer(), 'captcha.png')
            sendEmbed(message, { author: 'CAPTCHA', description: 'Resuelve la CAPTCHA para comprobar que no eres un robot, sólo tienes dos intentos.', footer: 'Usuario: ' + message.author.tag, attachment: attachment, image: 'attachment://captcha.png', thumbnail: message.author.avatarURL() })
                .then(m => {
                    setTimeout(() => {
                        m.delete()
                    }, 20000)
                })
        }
    }

}

module.exports = Captcha