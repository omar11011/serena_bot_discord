const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 223
        this.pokemon = 'Remoraid'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 12
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Octillery', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('psicorrayo'), 10],
            [move.get('rayo aurora'), 14],
            [move.get('rayo burbuja'), 18],
            [move.get('hidropulso'), 26],
            [move.get('doble rayo'), 30],
            [move.get('rayo hielo'), 34],
            [move.get('recurrente'), 38],
            [move.get('hidrobomba'), 42],
            [move.get('hiperrayo'), 46],
        ]
        this.stats = {
            hp: 35,
            attack: 65,
            defense: 35,
            spattack: 65,
            spdefense: 35,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}