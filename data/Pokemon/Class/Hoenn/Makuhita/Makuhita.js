const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 296
        this.pokemon = 'Makuhita'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 86.4
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hariyama', 24),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('empujón'), 7],
            [move.get('sorpresa'), 10],
            [move.get('palmeo'), 13],
            [move.get('desarme'), 19],
            [move.get('tiro vital'), 22],
            [move.get('estímulo'), 28],
            [move.get('espabila'), 34],
            [move.get('a bocajarro'), 40],
            [move.get('inversión'), 43],
            [move.get('cuerpo pesado'), 46],
        ]
        this.stats = {
            hp: 72,
            attack: 60,
            defense: 30,
            spattack: 20,
            spdefense: 30,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}