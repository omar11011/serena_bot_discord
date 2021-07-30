const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 206
        this.pokemon = 'Dunsparce'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 14
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('desenrollar'), 3],
            [move.get('persecución'), 8],
            [move.get('poder pasado'), 16],
            [move.get('golpe cuerpo'), 18],
            [move.get('taladradora'), 21],
            [move.get('derribo'), 26],
            [move.get('excavar'), 31],
            [move.get('doble filo'), 36],
            [move.get('esfuerzo'), 38],
            [move.get('tajo aérep'), 41],
            [move.get('cola dragón'), 43],
            [move.get('azote'), 48],
        ]
        this.stats = {
            hp: 100,
            attack: 70,
            defense: 70,
            spattack: 65,
            spdefense: 65,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}