const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 487
        this.pokemon = 'Giratina'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 750
        this.altura = 4.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Giratina Forma Origen', item.get('orbe amarillo'))
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('dragoaliento'), 1],
            [move.get('viento aciago'), 6],
            [move.get('poder pasado'), 10],
            [move.get('cuchillada'), 15],
            [move.get('sombra vil'), 19],
            [move.get('garra dragón'), 28],
            [move.get('tierra viva'), 33],
            [move.get('esfera aural'), 37],
            [move.get('garra umbría'), 42],
            [move.get('golpe umbrío'), 46],
            [move.get('infortunio'), 50],
        ]
        this.stats = {
            hp: 150,
            attack: 100,
            defense: 120,
            spattack: 100,
            spdefense: 120,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}