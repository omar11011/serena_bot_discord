const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 369
        this.pokemon = 'Relicanth'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 23.4
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 25
        this.amistad = 70
        this.movimientos = [
            [move.get('azote'), 1],
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 10],
            [move.get('tumba rocas'), 15],
            [move.get('poder pasado'), 21],
            [move.get('buceo'), 26],
            [move.get('derribo'), 31],
            [move.get('hidrobomba'), 46],
            [move.get('doble filo'), 50],
            [move.get('testarazo'), 56],
        ]
        this.stats = {
            hp: 100,
            attack: 90,
            defense: 130,
            spattack: 45,
            spdefense: 65,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}