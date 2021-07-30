const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 647
        this.pokemon = 'Keldeo'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 48.5
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Keldeo Forma Brío'),
        ]
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('doble patada'), 7],
            [move.get('acua jet'), 10],
            [move.get('rayo burbuja'), 13],
            [move.get('derribo'), 19],
            [move.get('represalia'), 31],
            [move.get('acua cola'), 37],
            [move.get('espada santa'), 43],
            [move.get('hidrobomba'), 67],
            [move.get('a bocajarro'), 73],
        ]
        this.stats = {
            hp: 91,
            attack: 72,
            defense: 90,
            spattack: 129,
            spdefense: 90,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}