const Base = require("../Farfetch'd").class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = "Farfetch'd de Galar"
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 42
        this.evolucion = [
            new Entidades.Evolucion.Nivel("Sirfetch'd", 45),
        ]
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('corte furia'), 10],
            [move.get('golpe roca'), 15],
            [move.get('giro vil'), 20],
            [move.get('desarme'), 30],
            [move.get('demolición'), 40],
            [move.get('atizar'), 50],
            [move.get('hoja aguda'), 55],
            [move.get('pájaro osado'), 65],
        ]
        this.stats = {
            hp: 52,
            attack: 95,
            defense: 55,
            spattack: 58,
            spdefense: 62,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}