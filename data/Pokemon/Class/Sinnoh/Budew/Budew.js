const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 406
        this.pokemon = 'Budew'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.2
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Roselia'),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('megaagotar'), 13],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 35,
            spattack: 50,
            spdefense: 70,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}