const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 722
        this.pokemon = 'Rowlet'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dartrix', 17),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('follaje'), 1],
            [move.get('picotazo'), 8],
            [move.get('impresionar'), 11],
            [move.get('hoja afilada'), 14],
            [move.get('viento aciago'), 16],
            [move.get('picoteo'), 22],
            [move.get('ataque furia'), 29],
            [move.get('golpe bajo'), 32],
            [move.get('hoja aguda'), 36],
            [move.get('pájaro osado'), 43],
        ]
        this.stats = {
            hp: 68,
            attack: 55,
            defense: 55,
            spattack: 50,
            spdefense: 50,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}