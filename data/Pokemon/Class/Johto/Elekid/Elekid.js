const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 239
        this.pokemon = 'Elekid'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 23.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Electabuzz', 30),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('patada baja'), 8],
            [move.get('rapidez'), 12],
            [move.get('onda voltio'), 15],
            [move.get('bola voltio'), 22],
            [move.get('puño trueno'), 29],
            [move.get('chispazo'), 33],
            [move.get('rayo'), 40],
            [move.get('trueno'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 63,
            defense: 37,
            spattack: 65,
            spdefense: 55,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}