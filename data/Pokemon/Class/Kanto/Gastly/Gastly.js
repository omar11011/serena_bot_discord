const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 92
        this.pokemon = 'Gastly'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 0.1
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Haunter', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('lengüetazo'), 1],
            [move.get('tóxico'), 6],
            [move.get('tinieblas'), 15],
            [move.get('golpe bajo'), 22],
            [move.get('vendetta'), 26],
            [move.get('bola sombra'), 29],
            [move.get('come sueños'), 33],
            [move.get('pulso umbrío'), 36],
            [move.get('infortunio'), 43],
        ]
        this.stats = {
            hp: 30,
            attack: 35,
            defense: 30,
            spattack: 100,
            spdefense: 35,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}