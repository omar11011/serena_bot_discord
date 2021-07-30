const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 214
        this.pokemon = 'Heracross'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 54
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Heracross', item.get('heracrossita'))
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('empujón'), 1],
            [move.get('recurrente'), 1],
            [move.get('tajo umbrío'), 1],
            [move.get('placaje'), 1],
            [move.get('cornada'), 1],
            [move.get('amago'), 7],
            [move.get('golpe aéreo'), 10],
            [move.get('guardia baja'), 16],
            [move.get('contraataque'), 19],
            [move.get('ataque furia'), 25],
            [move.get('demolición'), 28],
            [move.get('pin misil'), 31],
            [move.get('derribo'), 34],
            [move.get('mega cuerno'), 37],
            [move.get('a bocajarro'), 43],
            [move.get('inversión'), 46],
        ]
        this.stats = {
            hp: 80,
            attack: 125,
            defense: 75,
            spattack: 40,
            spdefense: 95,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}