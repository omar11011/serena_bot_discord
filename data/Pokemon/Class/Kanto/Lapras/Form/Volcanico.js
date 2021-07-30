const Base = require('../Lapras').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Lapras Volcánico'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Roca,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 270
        this.altura = 2.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 15
        this.amistad = 20
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ascuas'), 1],
            [move.get('avalancha'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('antiaéreo'), 10],
            [move.get('hidropulso'), 14],
            [move.get('golpe cuerpo'), 18],
            [move.get('onda ígnea'), 32],
            [move.get('salmuera'), 37],
            [move.get('roca afilada'), 45],
            [move.get('hidrobomba'), 47],
            [move.get('infierno'), 48],
        ]
        this.stats = {
            hp: 130,
            attack: 85,
            defense: 90,
            spattack: 85,
            spdefense: 105,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}