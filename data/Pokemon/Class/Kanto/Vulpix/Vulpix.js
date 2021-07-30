const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 37
        this.pokemon = 'Vulpix'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 9.9
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Item('Ninetales', item.get('piedra fuego')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('giro fuego'), 12],
            [move.get('vendetta'), 18],
            [move.get('finta'), 23],
            [move.get('infortunio'), 26],
            [move.get('pirotecnia'), 28],
            [move.get('paranormal'), 31],
            [move.get('lanzallamas'), 36],
            [move.get('llamarada'), 42],
            [move.get('infierno'), 50],
        ]
        this.stats = {
            hp: 38,
            attack: 41,
            defense: 40,
            spattack: 50,
            spdefense: 65,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}