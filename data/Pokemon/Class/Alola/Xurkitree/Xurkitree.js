const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 796
        this.pokemon = 'Xurkitree'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 100
        this.altura = 3.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 30
        this.amistad = 0
        this.movimientos = [
            [move.get('chispa'), 1],
            [move.get('constricción'), 1],
            [move.get('impactrueno'), 1],
            [move.get('onda voltio'), 13],
            [move.get('puño trueno'), 23],
            [move.get('doble rayo'), 31],
            [move.get('rayo'), 37],
            [move.get('chispazo'), 47],
            [move.get('latigazo'), 59],
            [move.get('electrocañón'), 73],
        ]
        this.stats = {
            hp: 83,
            attack: 89,
            defense: 71,
            spattack: 173,
            spdefense: 71,
            speed: 83,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}