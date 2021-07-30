const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 747
        this.pokemon = 'Mareanie'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Toxapex', 38),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('picotazo'), 5],
            [move.get('mordisco'), 9],
            [move.get('carga tóxica'), 25],
            [move.get('clavo cañón'), 29],
            [move.get('puya nociva'), 37],
            [move.get('pin misil'), 45],
            [move.get('hidroariete'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 53,
            defense: 62,
            spattack: 43,
            spdefense: 52,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}