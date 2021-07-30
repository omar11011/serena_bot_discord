const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 32
        this.pokemon = 'Nidoran M'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Nidorino', 16),
        ]
        this.captura = 235
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 1],
            [move.get('doble patada'), 9],
            [move.get('picotazo venenoso'), 13],
            [move.get('ataque furia'), 19],
            [move.get('cornada'), 21],
            [move.get('puya nociva'), 37],
        ]
        this.stats = {
            hp: 46,
            attack: 57,
            defense: 40,
            spattack: 40,
            spdefense: 40,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}