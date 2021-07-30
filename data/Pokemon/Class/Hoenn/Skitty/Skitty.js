const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 300
        this.pokemon = 'Skitty'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 11
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Delcatty', item.get('piedra lunar')),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('placaje'), 1],
            [move.get('voz cautivadora'), 13],
            [move.get('doble bofetón'), 16],
            [move.get('finta'), 22],
            [move.get('espabila'), 28],
            [move.get('antojo'), 34],
            [move.get('doble filo'), 40],
            [move.get('carantoña'), 46],
        ]
        this.stats = {
            hp: 50,
            attack: 45,
            defense: 45,
            spattack: 35,
            spdefense: 35,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}