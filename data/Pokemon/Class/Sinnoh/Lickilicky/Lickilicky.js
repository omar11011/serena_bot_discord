const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 463
        this.pokemon = 'Lickilicky'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 140
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('lengüetazo'), 1],
            [move.get('desarme'), 13],
            [move.get('constricción'), 17],
            [move.get('pisotón'), 21],
            [move.get('atizar'), 29],
            [move.get('desenrollar'), 33],
            [move.get('guardia baja'), 37],
            [move.get('latigazo'), 53],
            [move.get('estrujón'), 57],
            [move.get('giro bola'), 61],
        ]
        this.stats = {
            hp: 110,
            attack: 85,
            defense: 95,
            spattack: 80,
            spdefense: 95,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}