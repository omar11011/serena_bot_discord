const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 336
        this.pokemon = 'Seviper'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 52.5
        this.altura = 2.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 90
        this.amistad = 70
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('mordisco'), 4],
            [move.get('lengüetazo'), 6],
            [move.get('cola veneno'), 9],
            [move.get('amago'), 11],
            [move.get('carga tóxica'), 16],
            [move.get('colmillo veneno'), 21],
            [move.get('tajo umbrío'), 26],
            [move.get('puya nociva'), 31],
            [move.get('triturar'), 39],
            [move.get('eructo'), 41],
            [move.get('estrujón'), 46],
            [move.get('tajo umbrío'), 46],
        ]
        this.stats = {
            hp: 73,
            attack: 100,
            defense: 60,
            spattack: 100,
            spdefense: 60,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}