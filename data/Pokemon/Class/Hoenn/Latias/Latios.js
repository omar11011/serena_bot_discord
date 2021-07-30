const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 381
        this.pokemon = 'Latios'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 60
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Latios', item.get('latiosita')),
        ]
        this.captura = 3
        this.amistad = 90
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('poder reserva'), 10],
            [move.get('dragoaliento'), 20],
            [move.get('bola neblina'), 24],
            [move.get('cabezazo zen'), 41],
            [move.get('psíquico'), 51],
            [move.get('pulso dragón'), 56],
        ]
        this.stats = {
            hp: 80,
            attack: 90,
            defense: 80,
            spattack: 130,
            spdefense: 110,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}