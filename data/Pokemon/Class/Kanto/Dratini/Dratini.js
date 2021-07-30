const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 147
        this.pokemon = 'Dratini'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 3.3
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dragonair', 30),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('ciclón'), 11],
            [move.get('furia dragón'), 15],
            [move.get('atizar'), 21],
            [move.get('cola dragón'), 31],
            [move.get('acua cola'), 35],
            [move.get('carga dragón'), 41],
            [move.get('enfado'), 55],
            [move.get('hiperrayo'), 61],
        ]
        this.stats = {
            hp: 41,
            attack: 64,
            defense: 45,
            spattack: 50,
            spdefense: 50,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}