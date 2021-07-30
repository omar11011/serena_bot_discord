const sendEmbed = require('./sendEmbed')

const emojiGigamax = ' <:gigamax:770911557479170089>'

const info = (message, data, pokemon) => {
    const embed = {
        color: pokemon.color.hexadecimal,
        author: (data.shiny ? '⭐ ' : '') + pokemon.pokemon + ' #' + pokemon.id + (data.gigamax ? emojiGigamax : ''),
        description: 'ID Global: ' + data.id + (data.trainer ? '\nDueño: ' + data.trainer.name : '') + '\nNivel: ' + data.level + ' (' + data.xp + '/' + pokemon.needExp(data.level) + ')\nGénero: ' + data.gender + '\nNaturaleza: ' + data.nature + '\nAmistad: ' + data.friendship + '/255\n' + (data.gigamax ? 'Nivel Dinamax: ' + data.dynamax + '/10\n' : '') + 'IV Total: ' + data.iv + '%' + (data.object ? '\nObjeto Equipado: ' + data.object : ''),
        fields: [
            { name: 'Salud', value: 'IV: ' + data.hp + '/31\nPE: ' + data.hp_pe + '/100\nPoder: ' + (data.power ? data.power.hp + '/' + data.power.hpTotal : Math.round(pokemon.calculateStat(data.level, data.hp, data.hp_pe, data.nature, 'hp') * (data.life / 100)) + '/' + pokemon.calculateStat(data.level, data.hp, data.hp_pe, data.nature, 'hp')), inline: true },
            { name: 'Ataque', value: 'IV: ' + data.attack + '/31\nPE: ' + data.attack_pe + '/100\nPoder: ' + (data.power ? data.power.attack : pokemon.calculateStat(data.level, data.attack, data.attack_pe, data.nature, 'attack')), inline: true },
            { name: 'Defensa', value: 'IV: ' + data.defense + '/31\nPE: ' + data.defense_pe + '/100\nPoder: ' + (data.power ? data.power.defense : pokemon.calculateStat(data.level, data.defense, data.defense_pe, data.nature, 'defense')), inline: true },
            { name: 'Ataque Esp.', value: 'IV: ' + data.spattack + '/31\nPE: ' + data.spattack_pe + '/100\nPoder: ' + (data.power ? data.power.spattack : pokemon.calculateStat(data.level, data.spattack, data.spattack_pe, data.nature, 'spattack')), inline: true },
            { name: 'Defensa Esp.', value: 'IV: ' + data.spdefense + '/31\nPE: ' + data.spdefense_pe + '/100\nPoder: ' + (data.power ? data.power.spdefense : pokemon.calculateStat(data.level, data.spdefense, data.spdefense_pe, data.nature, 'spdefense')), inline: true },
            { name: 'Velocidad', value: 'IV: ' + data.speed + '/31\nPE: ' + data.speed_pe + '/100\nPoder: ' + (data.power ? data.power.speed : pokemon.calculateStat(data.level, data.speed, data.speed_pe, data.nature, 'speed')), inline: true },
        ],
        files: {
            attachment: pokemon.getImg(data.shiny),
            name: 'pokemon.png',
        },
        footer: 'Información requerida por: ' + message.author.tag,
    }

    return sendEmbed(message, embed)
}

module.exports = info