const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 845
        this.pokemon = 'Cramorant'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 18
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('escupir'), 1],
            [move.get('pistola agua'), 7],
            [move.get('ataque furia'), 14],
            [move.get('picoteo'), 21],
            [move.get('buceo'), 28],
            [move.get('pico taladro'), 35],
            [move.get('eructo'), 40],
            [move.get('golpe'), 49],
            [move.get('hidrobomba'), 56],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 55,
            spattack: 85,
            spdefense: 95,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}