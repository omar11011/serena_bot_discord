const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 840
        this.pokemon = 'Applin'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 0.5
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Flapple', item.get('manzana ácida')),
            new Entidades.Evolucion.Item('Appletun', item.get('manzana dulce')),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 80,
            spattack: 40,
            spdefense: 40,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}