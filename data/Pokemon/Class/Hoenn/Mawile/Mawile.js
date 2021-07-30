const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 303
        this.pokemon = 'Mawile'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 11.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Mawile', item.get('mawilita')),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('impresionar'), 1],
            [move.get('mordisco'), 9],
            [move.get('agarre'), 17],
            [move.get('finta'), 21],
            [move.get('triturar'), 29],
            [move.get('golpe bajo'), 37],
            [move.get('escupir'), 41],
            [move.get('cabeza de hierro'), 45],
            [move.get('carantoña'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 85,
            defense: 85,
            spattack: 55,
            spdefense: 55,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}