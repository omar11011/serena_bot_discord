const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 140
        this.pokemon = 'Kabuto'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kabutops', 40),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('absorber'), 6],
            [move.get('disparo lodo'), 16],
            [move.get('acua jet'), 31],
            [move.get('megaagotar'), 36],
            [move.get('poder pasado'), 46],
            [move.get('hidrobomba'), 49],
            [move.get('estrujón'), 50],
        ]
        this.stats = {
            hp: 30,
            attack: 80,
            defense: 90,
            spattack: 55,
            spdefense: 45,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}