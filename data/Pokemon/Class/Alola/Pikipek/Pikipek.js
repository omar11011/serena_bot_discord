const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 731
        this.pokemon = 'Pikipek'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Trumbeak', 14),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('eco voz'), 7],
            [move.get('golpe roca'), 9],
            [move.get('picoteo'), 15],
            [move.get('ataque furia'), 21],
            [move.get('pico taladro'), 27],
            [move.get('recurrente'), 31],
            [move.get('vozarrón'), 37],
        ]
        this.stats = {
            hp: 35,
            attack: 75,
            defense: 30,
            spattack: 30,
            spdefense: 30,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}