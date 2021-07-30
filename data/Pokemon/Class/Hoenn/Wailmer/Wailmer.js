const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 320
        this.pokemon = 'Wailmer'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 130
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Wailord', 40)
        ]
        this.captura = 125
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('desenrollar'), 10],
            [move.get('torbellino'), 13],
            [move.get('impresionar'), 16],
            [move.get('hidropulso'), 19],
            [move.get('salmuera'), 25],
            [move.get('buceo'), 33],
            [move.get('salpicar'), 41],
            [move.get('bote'), 45],
            [move.get('hidrobomba'), 49],
            [move.get('cuerpo pesado'), 53],
        ]
        this.stats = {
            hp: 130,
            attack: 70,
            defense: 35,
            spattack: 70,
            spdefense: 35,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}