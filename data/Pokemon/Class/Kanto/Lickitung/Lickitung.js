const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 108
        this.pokemon = 'Lickitung'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 65.5
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Lickilicky', move.get('desenrollar'))
        ]
        this.captura = 45
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
        ]
        this.stats = {
            hp: 90,
            attack: 55,
            defense: 75,
            spattack: 60,
            spdefense: 75,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}