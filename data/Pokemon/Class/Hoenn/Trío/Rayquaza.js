const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 384
        this.pokemon = 'Rayquaza'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 206.5
        this.altura = 7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Rayquaza', item.get('prisma jade')),
            new Entidades.Evolucion.Gigamax('Rayquaza Gigamax'),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('ciclón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('triturar'), 20],
            [move.get('tajo aéreo'), 30],
            [move.get('velocidad extrema'), 45],
            [move.get('pulso dragón'), 50],
            [move.get('vuelo'), 65],
            [move.get('vozarrón'), 75],
            [move.get('enfado'), 80],
            [move.get('hiperrayo'), 90],
        ]
        this.stats = {
            hp: 105,
            attack: 150,
            defense: 90,
            spattack: 150,
            spdefense: 90,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}