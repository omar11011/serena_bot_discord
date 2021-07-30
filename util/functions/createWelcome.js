const { MessageEmbed } = require('discord.js')

const create = async (client, member, data, attachment) => {
    const embed = new MessageEmbed()
        .setColor('#FDF6F4')
        .setAuthor(member.guild.name, member.guild.iconURL())
        .setTitle(`!Bienvenid@ ${member.user.username}!`)
        .setDescription(data.description)
        .setFooter(data.footer)
        .attachFiles(attachment)
        .setImage('attachment://welcome.png')
        .setTimestamp()

    client.channels.cache.get(data.channel).send(embed)
}

module.exports = create