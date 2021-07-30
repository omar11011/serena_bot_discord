const Base = require('../Ledyba').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Ledyba de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 12
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ledian de Saife', 18),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe kárate'), 8],
            [move.get('ultra puño'), 15],
            [move.get('viento plata'), 19],
            [move.get('puño cometa'), 22],
            [move.get('zumbido'), 33],
            [move.get('a bocajarro'), 36],
            [move.get('doble filo'), 40],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 80,
            spattack: 20,
            spdefense: 30,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}