const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 258
        this.pokemon = 'Mudkip'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 7.6
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Marshtomp', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 4],
            [move.get('bofetón lodo'), 9],
            [move.get('lanzarrocas'), 25],
            [move.get('torbellino'), 33],
            [move.get('derribo'), 36],
            [move.get('hidrobomba'), 41],
            [move.get('esfuerzo'), 44],
        ]
        this.stats = {
            hp: 50,
            attack: 70,
            defense: 50,
            spattack: 50,
            spdefense: 50,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}