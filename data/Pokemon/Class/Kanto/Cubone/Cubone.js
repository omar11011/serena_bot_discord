const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 104
        this.pokemon = 'Cubone'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Marowak', 28),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hueso palo'), 7],
            [move.get('golpe cabeza'), 11],
            [move.get('huesomerang'), 21],
            [move.get('furia'), 23],
            [move.get('falsotortazo'), 27],
            [move.get('golpe'), 31],
            [move.get('lanzamiento'), 33],
            [move.get('pataleta'), 37],
            [move.get('esfuerzo'), 41],
            [move.get('doble filo'), 43],
            [move.get('represalia'), 47],
            [move.get('ataque óseo'), 51],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 95,
            spattack: 40,
            spdefense: 50,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}