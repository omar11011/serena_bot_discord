const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 486
        this.pokemon = 'Regigigas'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 420
        this.altura = 3.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Regigigas Gigamax'),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('pisotón'), 1],
            [move.get('puño fuego'), 1],
            [move.get('puño hielo'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño mareo'), 1],
            [move.get('desarme'), 1],
            [move.get('mega puño'), 1],
            [move.get('desquite'), 25],
            [move.get('cabezazo zen'), 50],
            [move.get('vendetta'), 65],
            [move.get('agarrón'), 75],
            [move.get('cuerpo pesado'), 90],
            [move.get('giga impacto'), 100],
        ]
        this.stats = {
            hp: 110,
            attack: 160,
            defense: 110,
            spattack: 80,
            spdefense: 110,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}