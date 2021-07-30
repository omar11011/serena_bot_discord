const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 107
        this.pokemon = 'Hitmonchan'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 50.2
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('desquite'), 1],
            [move.get('puño cometa'), 1],
            [move.get('persecución'), 11],
            [move.get('ultra puño'), 16],
            [move.get('amago'), 21],
            [move.get('onda vacío'), 26],
            [move.get('puño hielo'), 36],
            [move.get('puño trueno'), 36],
            [move.get('puño fuego'), 36],
            [move.get('gancho alto'), 41],
            [move.get('mega puño'), 46],
            [move.get('puño certero'), 56],
            [move.get('contraataque'), 61],
            [move.get('a bocajarro'), 63],
        ]
        this.stats = {
            hp: 50,
            attack: 105,
            defense: 79,
            spattack: 35,
            spdefense: 110,
            speed: 76,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}