const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 580
        this.pokemon = 'Ducklett'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Swanna', 35),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque ala'), 9],
            [move.get('hidropulso'), 13],
            [move.get('golpe aéreo'), 15],
            [move.get('rayo burbuja'), 19],
            [move.get('tajo aéreo'), 27],
            [move.get('pájaro osado'), 41],
            [move.get('vendaval'), 46],
        ]
        this.stats = {
            hp: 62,
            attack: 44,
            defense: 50,
            spattack: 44,
            spdefense: 50,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}