const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 640
        this.pokemon = 'Virizion'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 200
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('doble patada'), 1],
            [move.get('hoja mágica'), 1],
            [move.get('derribo'), 7],
            [move.get('represalia'), 19],
            [move.get('gigadrenado'), 25],
            [move.get('espada santa'), 31],
            [move.get('hoja aguda'), 55],
            [move.get('a bocajarro'), 61],
        ]
        this.stats = {
            hp: 91,
            attack: 90,
            defense: 72,
            spattack: 90,
            spdefense: 129,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}