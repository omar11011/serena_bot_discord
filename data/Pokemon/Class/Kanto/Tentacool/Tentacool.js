const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 72
        this.pokemon = 'Tentacool'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 45.5
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Tentacruel', 30),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('restricción'), 7],
            [move.get('ácido'), 10],
            [move.get('hidropulso'), 16],
            [move.get('constricción'), 19],
            [move.get('bomba ácida'), 22],
            [move.get('pistola agua'), 22],
            [move.get('rayo burbuja'), 25],
            [move.get('puya nociva'), 31],
            [move.get('salmuera'), 34],
            [move.get('infortunio'), 40],
            [move.get('onda tóxica'), 43],
            [move.get('hidrobomba'), 46],
            [move.get('estrujón'), 49],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 35,
            spattack: 50,
            spdefense: 100,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}