const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 380
        this.pokemon = 'Latias'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 40
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Latias', item.get('latiasita')),
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
            attack: 80,
            defense: 90,
            spattack: 110,
            spdefense: 130,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}