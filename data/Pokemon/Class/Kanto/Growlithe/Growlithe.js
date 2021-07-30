const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 58
        this.pokemon = 'Growlithe'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 19
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Item('Arcanine', item.get('piedra fuego')),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('ascuas'), 6],
            [move.get('rueda fuego'), 17],
            [move.get('inversión'), 19],
            [move.get('colmillo ígneo'), 21],
            [move.get('derribo'), 23],
            [move.get('pirotecnia'), 28],
            [move.get('represalia'), 32],
            [move.get('lanzallamas'), 34],
            [move.get('triturar'), 39],
            [move.get('onda ígnea'), 41],
            [move.get('enfado'), 43],
            [move.get('envite ígneo'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 70,
            defense: 45,
            spattack: 70,
            spdefense: 50,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}