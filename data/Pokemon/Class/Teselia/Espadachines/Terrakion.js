const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 639
        this.pokemon = 'Terrakion'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 260
        this.altura = 1.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('doble patada'), 1],
            [move.get('antiaéreo'), 1],
            [move.get('derribo'), 7],
            [move.get('represalia'), 19],
            [move.get('avalancha'), 25],
            [move.get('espada santa'), 31],
            [move.get('roca afilada'), 55],
            [move.get('a bocajarro'), 61],
        ]
        this.stats = {
            hp: 91,
            attack: 129,
            defense: 90,
            spattack: 72,
            spdefense: 90,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}