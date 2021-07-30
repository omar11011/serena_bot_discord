const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 86
        this.pokemon = 'Seel'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 90
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dewgong', 34),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('viento hielo'), 11],
            [move.get('canto helado'), 17],
            [move.get('rayo aurora'), 27],
            [move.get('acua jet'), 31],
            [move.get('salmuera'), 33],
            [move.get('derribo'), 37],
            [move.get('buceo'), 41],
            [move.get('acua cola'), 43],
            [move.get('rayo hielo'), 47],
        ]
        this.stats = {
            hp: 65,
            attack: 45,
            defense: 55,
            spattack: 45,
            spdefense: 70,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}