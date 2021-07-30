const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 898
        this.pokemon = 'Calyrex'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 7.7
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Calyrex Jinete Glacial', item.get('riendas unión')),
            new Entidades.Evolucion.Item('Calyrex Jinete Espectral', item.get('riendas unión')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('megaagotar'), 1],
            [move.get('confusión'), 1],
            [move.get('gigadrenado'), 16],
            [move.get('psicocarga'), 24],
            [move.get('energibola'), 48],
            [move.get('psíquico'), 56],
            [move.get('rayo solar'), 80],
            [move.get('premonición'), 88],
        ]
        this.stats = {
            hp: 100,
            attack: 80,
            defense: 80,
            spattack: 80,
            spdefense: 80,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}