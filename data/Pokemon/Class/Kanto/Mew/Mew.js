const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 151
        this.pokemon = 'Mew'
        this.region = Entidades.Region.Kanto
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Mew', item.get('mewita')),
        ]
        this.captura = 45
        this.amistad = 100
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('mega puño'), 10],
            [move.get('psíquico'), 30],
            [move.get('poder pasado'), 50],
            [move.get('esfera aural'), 100],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}