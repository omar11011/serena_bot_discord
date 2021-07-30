const breedMoves = (moves, data) => {
    if(moves != null) {
        moves = moves.split(",")
        
        const canLearn = []
        data.map(e => {
            canLearn.push(e[0].nombre)
        })
        moves = moves.filter(e => {
            return canLearn.includes(e)
        })
        moves = moves.filter(e => {
            return Math.random() > 0.5
        })

        if(moves.length == 0) moves = null
        else moves = moves.join(",")
    }

    return moves
}

module.exports = breedMoves