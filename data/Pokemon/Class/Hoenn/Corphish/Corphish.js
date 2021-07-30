const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 341
        this.pokemon = 'Corphish'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 11.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Crawdaunt', 30),
        ]
        this.captura = 205
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 7],
            [move.get('rayo burbuja'), 14],
            [move.get('doble golpe'), 20],
            [move.get('desarme'), 23],
            [move.get('tajo umbrío'), 26],
            [move.get('concha filo'), 31],
            [move.get('triturar'), 39],
            [move.get('martillazo'), 43],
            [move.get('guillotina'), 48],
        ]
        this.stats = {
            hp: 43,
            attack: 80,
            defense: 65,
            spattack: 50,
            spdefense: 35,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}