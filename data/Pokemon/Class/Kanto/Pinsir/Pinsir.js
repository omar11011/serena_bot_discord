const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 127
        this.pokemon = 'Pinsir'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 55
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Pinsir', item.get('pinsirita'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('atadura'), 4],
            [move.get('desquite'), 15],
            [move.get('tiro vital'), 18],
            [move.get('doble golpe'), 22],
            [move.get('demolición'), 26],
            [move.get('tijera x'), 29],
            [move.get('sumisión'), 33],
            [move.get('llave corsé'), 36],
            [move.get('golpe'), 43],
            [move.get('fuerza bruta'), 47],
            [move.get('guillotina'), 50],
        ]
        this.stats = {
            hp: 65,
            attack: 120,
            defense: 100,
            spattack: 55,
            spdefense: 70,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}