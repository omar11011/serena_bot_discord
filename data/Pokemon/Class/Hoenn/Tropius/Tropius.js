const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 357
        this.pokemon = 'Tropius'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 100
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('hoja afilada'), 1],
            [move.get('pisotón'), 10],
            [move.get('hoja mágica'), 16],
            [move.get('ciclón de hojas'), 26],
            [move.get('don natural'), 30],
            [move.get('tajo aéreo'), 36],
            [move.get('golpe cuerpo'), 41],
            [move.get('rayo solar'), 56],
            [move.get('lluevehojas'), 61],
        ]
        this.stats = {
            hp: 99,
            attack: 68,
            defense: 83,
            spattack: 72,
            spdefense: 87,
            speed: 51,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}