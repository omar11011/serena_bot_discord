const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 610
        this.pokemon = 'Axew'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 18
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Fraxure', 38),
        ]
        this.captura = 75
        this.amistad = 35
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('buena baza'), 7],
            [move.get('furia dragón'), 10],
            [move.get('cuchillada'), 20],
            [move.get('falsotortazo'), 24],
            [move.get('garra dragón'), 28],
            [move.get('pulso dragón'), 41],
            [move.get('guillotina'), 51],
            [move.get('enfado'), 56],
            [move.get('giga impacto'), 61],
        ]
        this.stats = {
            hp: 46,
            attack: 87,
            defense: 60,
            spattack: 30,
            spdefense: 40,
            speed: 57,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}