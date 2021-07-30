const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 594
        this.pokemon = 'Alomomola'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 31.6
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 75
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('acua jet'), 9],
            [move.get('doble bofetón'), 13],
            [move.get('hidropulso'), 25],
            [move.get('espabila'), 29],
            [move.get('salmuera'), 41],
            [move.get('torbellino'), 49],
            [move.get('hidrobomba'), 65],
        ]
        this.stats = {
            hp: 165,
            attack: 75,
            defense: 80,
            spattack: 40,
            spdefense: 45,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}