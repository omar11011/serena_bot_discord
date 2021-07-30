const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 143
        this.pokemon = 'Snorlax'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 460
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Snorlax Gigamax'),
            new Entidades.Evolucion.Mega('Mega Snorlax', item.get('snorlaxita')),
        ]
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('antojo'), 1],
            [move.get('lanzamiento'), 1],
            [move.get('azote'), 1],
            [move.get('última baza'), 1],
            [move.get('mordisco'), 16],
            [move.get('guardia baja'), 17],
            [move.get('lengüetazo'), 19],
            [move.get('ronquido'), 20],
            [move.get('triturar'), 24],
            [move.get('golpe cuerpo'), 28],
            [move.get('cuerpo pesado'), 32],
            [move.get('fuerza equina'), 40],
            [move.get('machada'), 44],
            [move.get('eructo'), 52],
            [move.get('giga impacto'), 56],
            [move.get('fuerza bruta'), 65],
        ]
        this.stats = {
            hp: 160,
            attack: 110,
            defense: 65,
            spattack: 65,
            spdefense: 110,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}