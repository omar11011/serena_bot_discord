const client = require('../class/Client')
const { MessageEmbed, MessageAttachment } = require('discord.js')

const sendEmbed = (message, options, send = true) => {
    const embed = new MessageEmbed()
        .setColor(options.color || 'RANDOM')

    if(options.title) embed.setTitle(options.title)
    if(options.url) embed.setURL(options.url)
    if(options.author) {
        if(!Array.isArray(options.author)) options.author = [options.author]
        if(!options.author[1]) options.author[1] = ''
        if(!options.author[2]) options.author[2] = ''

        embed.setAuthor(options.author[0], options.author[1], options.author[2])
    }
    if(options.description) embed.setDescription(options.description)
    if(options.thumbnail) embed.setThumbnail(options.thumbnail)
    if(options.image) embed.setImage(options.image)
    if(options.fields) {
        if(!Array.isArray(options.fields)) options.fields = [options.fields]
        if(options.fields.length > 0) for(let i = 0; i < options.fields.length; i++) embed.addFields(options.fields[i])
    }
    if(options.timestamp) embed.setTimestamp()
    if(options.footer) {
        if(!Array.isArray(options.footer)) options.footer = [options.footer]
        if(!options.footer[1]) options.footer[1] = ''

        embed.setFooter(options.footer[0], options.footer[1])
    }
    if(options.files) {
        embed.attachFiles(new MessageAttachment(options.files.attachment, options.files.name))
        embed.setImage('attachment://' + options.files.name)
    }
    if(options.attachment) embed.attachFiles(options.attachment)

    if(!send) return embed

    if(options.md) return message.author.send(embed)

    if(!options.channel) {
        try {
            return message.channel.send(embed)
        } catch(err) {
            console.log('Error')
        }
    }
    else {
        if(!Array.isArray(options.channel)) options.channel = [options.channel]

        for(let i = 0; i < options.channel.length; i++) {
            try {
                client.channels.cache.get(options.channel[i]).send(embed)
            } catch {
                console.log(`No pude escribir en el canal ${options.channel[i]}.`)
            }
        }
    }
}

module.exports = sendEmbed