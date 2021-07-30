const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 116
        this.pokemon = 'Horsea'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Seadra', 32)
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('placaje'), 1],
            [move.get('doble filo'), 9],
            [move.get('pistola agua'), 13],
            [move.get('ciclón'), 17],
            [move.get('rayo burbuja'), 21],
            [move.get('salmuera'), 31],
            [move.get('viento hielo'), 31],
            [move.get('pulso dragón'), 41],
            [move.get('hidrobomba'), 52],
        ]
        this.stats = {
            hp: 30,
            attack: 40,
            defense: 70,
            spattack: 70,
            spdefense: 25,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}