const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 692
        this.pokemon = 'Clauncher'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 8.3
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Clawitzer', 37),
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 9],
            [move.get('pistola agua'), 12],
            [move.get('azote'), 16],
            [move.get('rayo burbuja'), 20],
            [move.get('martillazo'), 30],
            [move.get('hidropulso'), 34],
            [move.get('antiaéreo'), 39],
            [move.get('acua jet'), 43],
            [move.get('agua lodosa'), 48],
        ]
        this.stats = {
            hp: 50,
            attack: 53,
            defense: 62,
            spattack: 58,
            spdefense: 63,
            speed: 44,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}