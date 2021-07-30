const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 137
        this.pokemon = 'Porygon'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 36.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Porygon2', item.get('mejor')),
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
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 70,
            spattack: 85,
            spdefense: 75,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}