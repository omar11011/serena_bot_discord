const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 200
        this.pokemon = 'Misdreavus'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 1
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Item('Mismagius', item.get('piedra noche'))
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('impresionar'), 10],
            [move.get('infortunio'), 23],
            [move.get('psicorrayo'), 28],
            [move.get('vendetta'), 37],
            [move.get('bola sombra'), 41],
            [move.get('joya de luz'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 60,
            spattack: 85,
            spdefense: 85,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}