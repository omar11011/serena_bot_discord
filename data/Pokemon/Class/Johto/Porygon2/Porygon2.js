const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 233
        this.pokemon = 'Porygon2'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 32.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Porygon-Z', item.get('disco extraño')),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('psicorrayo'), 7],
            [move.get('doble rayo'), 29],
            [move.get('chispazo'), 40],
            [move.get('triataque'), 50],
            [move.get('electrocañón'), 62],
            [move.get('hiperrayo'), 67],
        ]
        this.stats = {
            hp: 85,
            attack: 80,
            defense: 90,
            spattack: 105,
            spdefense: 95,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}