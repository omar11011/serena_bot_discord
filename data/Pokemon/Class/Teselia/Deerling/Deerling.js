const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 585
        this.spawn = false
        this.pokemon = 'Deerling'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 19.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sawsbuck', 34),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('doble patada'), 10],
            [move.get('finta'), 16],
            [move.get('derribo'), 20],
            [move.get('patada salto'), 24],
            [move.get('energibola'), 32],
            [move.get('doble filo'), 46],
            [move.get('rayo solar'), 51],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}