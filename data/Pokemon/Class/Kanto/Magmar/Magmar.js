const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 126
        this.pokemon = 'Magmar'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fuego
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 44.5
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Magmortar', item.get('magmatizador'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('polución'), 1],
            [move.get('ascuas'), 5],
            [move.get('furia'), 9],
            [move.get('finta'), 12],
            [move.get('giro fuego'), 15],
            [move.get('niebla clara'), 19],
            [move.get('pirotecnia'), 22],
            [move.get('puño fuego'), 29],
            [move.get('humareda'), 36],
            [move.get('lanzallamas'), 49],
            [move.get('llamarada'), 55],
        ]
        this.stats = {
            hp: 65,
            attack: 95,
            defense: 57,
            spattack: 100,
            spdefense: 85,
            speed: 93,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}