const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 911
        this.pokemon = 'Baby Rayquaza'
        this.region = Entidades.Region.Saife
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 30
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Rayquaza', 100),
        ]
        this.captura = 120
        this.amistad = 70
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
            hp: 70,
            attack: 100,
            defense: 60,
            spattack: 100,
            spdefense: 60,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}