const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 716
        this.pokemon = 'Xerneas'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 215
        this.altura = 3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Xerneas', item.get('xerneasita')),
        ]
        this.captura = 70
        this.amistad = 0
        this.movimientos = [
            [move.get('derribo'), 1],
            [move.get('rayo aurora'), 10],
            [move.get('fuerza lunar'), 35],
            [move.get('mega cuerno'), 44],
            [move.get('tajo umbrío'), 51],
            [move.get('asta drenaje'), 55],
            [move.get('a bocajarro'), 80],
            [move.get('giga impacto'), 88],
            [move.get('enfado'), 93],
        ]
        this.stats = {
            hp: 126,
            attack: 131,
            defense: 95,
            spattack: 131,
            spdefense: 98,
            speed: 99,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}