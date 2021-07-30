const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 638
        this.pokemon = 'Cobalion'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 250
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('doble patada'), 1],
            [move.get('garra metal'), 1],
            [move.get('derribo'), 7],
            [move.get('represalia'), 19],
            [move.get('cabeza de hierro'), 25],
            [move.get('espada santa'), 31],
            [move.get('represión metálica'), 55],
            [move.get('a bocajarro'), 61],
        ]
        this.stats = {
            hp: 91,
            attack: 90,
            defense: 129,
            spattack: 90,
            spdefense: 72,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}