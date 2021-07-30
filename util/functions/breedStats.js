const stats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']
const itemPerStat = ['Pesa Recia', 'Brazal Recio', 'Cinta Recio', 'Lente Recia', 'Banda Recia', 'Franja Recia']

const amulet = (male, female) => {
    const result = { irisAmulet: false, prob: 10, shiny: false }
    if(male.object == 'Amuleto Iris' || female.object == 'Amuleto Iris') result.irisAmulet = true, result.prob = 100

    const max = 100000
    const random = Math.ceil(Math.random() * max)
    if(random > (max - result.prob)) result.shiny = true

    delete result.prob

    return result
}

const destiny = (male, female) => {
    const result = amulet(male, female)
    result.destiny = false
    if(male.object == 'Lazo Destino' || female.object == 'Lazo Destino') {
        result.destiny = true

        const random = Math.floor(Math.random() * stats.length)
        const currentStats = stats.splice(random, 1)

        for(let i = 0; i < currentStats.length; i++) {
            if(male.object == 'Lazo Destino' && female.object == 'Lazo Destino') {
                result[currentStats[i]] = [male[stats[i]], female[stats[i]]][Math.floor(Math.random() * 2)]
            }
            if(male.object == 'Lazo Destino' && female.object != 'Lazo Destino') result[currentStats[i]] = male[stats[i]]
            if(male.object != 'Lazo Destino' && female.object == 'Lazo Destino') result[currentStats[i]] = female[stats[i]]
        }

        result[stats[random]] = Math.ceil(Math.random() * 31)
    }

    return result
}

const individual = (male, female) => {
    const result = destiny(male, female)

    for(let i = 0; i < itemPerStat.length; i++) {
        if(male.object == itemPerStat[i] || female.object == itemPerStat[i]) {
            if(male.object == itemPerStat[i] && female.object == itemPerStat[i]) {
                result[stats[i]] = [male[stats[i]], female[stats[i]]][Math.floor(Math.random() * 2)]
            }
            if(male.object == itemPerStat[i] && female.object != itemPerStat[i]) result[stats[i]] = male[stats[i]]
            if(male.object != itemPerStat[i] && female.object == itemPerStat[i]) result[stats[i]] = female[stats[i]]
        }
    }

    return result
}

const getStats = (male, female) => {
    const result = individual(male, female)
    const emptyStats = []
    for(let i = 0; i < stats.length; i++) {
        if(result[stats[i]] == null) emptyStats.push(stats[i])
    }

    const selectStats = []
    for(let i = 0; selectStats.length < 3 || emptyStats.length == 0; i++) {
        const randomStat = emptyStats[Math.floor(Math.random() * emptyStats.length)]
        emptyStats.splice(emptyStats.indexOf(randomStat), 1)
        selectStats.push(randomStat)
    }
    for(let i = 0; i < selectStats.length; i++) result[selectStats[i]] = [male[selectStats[i]], female[selectStats[i]]][Math.floor(Math.random() * 2)]
    for(let i = 0; i < stats.length; i++) {
        if(result[stats[i]] == null) result[stats[i]] = Math.ceil(Math.random() * 31)
        if(!result.iv) result.iv = 0

        result.iv += result[stats[i]]
        if(stats.length - i == 1) result.iv = Number((result.iv / 186 * 100).toFixed(2))
    }
    
    return result
}

module.exports = getStats