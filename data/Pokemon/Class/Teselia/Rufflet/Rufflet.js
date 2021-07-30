const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 627
        this.pokemon = 'Rufflet'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 10.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Braviary', 54),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque furia'), 5],
            [move.get('ataque ala'), 10],
            [move.get('golpe aéreo'), 23],
            [move.get('cuchillada'), 28],
            [move.get('tajo aéreo'), 41],
            [move.get('garra brutal'), 46],
            [move.get('caída libre'), 50],
            [move.get('pájaro osado'), 59],
            [move.get('golpe'), 64],
        ]
        this.stats = {
            hp: 70,
            attack: 83,
            defense: 50,
            spattack: 37,
            spdefense: 50,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}