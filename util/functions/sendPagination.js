const { FieldsEmbed } = require('discord-paginationembed')

const sendPagination = async (message, options) => {
    if(!options.function) return

    const fieldsEmbed = new FieldsEmbed()
        .setArray(options.data)
        .setAuthorizedUsers([message.author.id])
        .setChannel(message.channel)
        .setDisabledNavigationEmojis(options.emojisDisable || ['delete'])
        .setElementsPerPage(options.elements || 10)
        .setPage(options.page || 1)

    fieldsEmbed.embed
        .setColor(options.color || 'RANDOM')

    if(options.title) fieldsEmbed.embed.setTitle(options.title)
    if(options.url) fieldsEmbed.embed.setURL(options.url)
    if(options.author) {
        if(!Array.isArray(options.author)) options.author = [options.author]
        if(!options.author[1]) options.author[1] = ''
        if(!options.author[2]) options.author[2] = ''
    
        fieldsEmbed.embed.setAuthor(options.author[0], options.author[1], options.author[2])
    }
    if(options.description) fieldsEmbed.embed.setDescription(options.description)
    if(options.thumbnail) fieldsEmbed.embed.setThumbnail(options.thumbnail)
    if(options.image) fieldsEmbed.embed.setImage(options.image)
    if(options.fields) {
        if(!Array.isArray(options.fields)) options.fields = [options.fields]
        if(options.fields.length > 0) for(let i = 0; i < options.fields.length; i++) fieldsEmbed.embed.addFields(options.fields[i])
    }
    if(options.timestamp) fieldsEmbed.embed.setTimestamp()
    if(options.footer) {
        if(!Array.isArray(options.footer)) options.footer = [options.footer]
        if(!options.footer[1]) options.footer[1] = ''

        fieldsEmbed.embed.setFooter(options.footer[0], options.footer[1])
    }

    fieldsEmbed
        .formatField(options.nameList, options.function)

    try {
        return await fieldsEmbed.build()
    } catch(err) {
        console.log(err)
    }
}

module.exports = sendPagination