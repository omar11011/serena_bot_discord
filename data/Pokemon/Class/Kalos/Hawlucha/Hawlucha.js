const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 701
        this.pokemon = 'Hawlucha'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 21.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Hawlucha', item.get('hawluchita')),
        ]
        this.captura = 100
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe kárate'), 4],
            [move.get('ataque ala'), 8],
            [move.get('golpe aéreo'), 16],
            [move.get('lanzamiento'), 24],
            [move.get('plancha voladora'), 28],
            [move.get('bote'), 32],
            [move.get('esfuerzo'), 36],
            [move.get('patada salto alta'), 44],
            [move.get('ataque aéreo'), 48],
            [move.get('caída libre'), 55],
        ]
        this.stats = {
            hp: 78,
            attack: 92,
            defense: 75,
            spattack: 74,
            spdefense: 63,
            speed: 118,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}