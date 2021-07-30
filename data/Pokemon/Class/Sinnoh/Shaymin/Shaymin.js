const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 492
        this.pokemon = 'Shaymin'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.1
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Shaymin Forma Cielo', item.get('gracídea')),
        ]
        this.captura = 45
        this.amistad = 100
        this.movimientos = [
            [move.get('hoja mágica'), 1],
            [move.get('don natural'), 10],
            [move.get('energibola'), 46],
            [move.get('fogonazo'), 91],
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