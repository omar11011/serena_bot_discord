const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 318
        this.pokemon = 'Carvanha'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Fluctuante
        this.peso = 20.8
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sharpedo', 30)
        ]
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('furia'), 4],
            [move.get('acua jet'), 11],
            [move.get('buena baza'), 15],
            [move.get('colmillo hielo'), 25],
            [move.get('colmillo veneno'), 32],
            [move.get('triturar'), 36],
            [move.get('derribo'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 95,
            defense: 20,
            spattack: 65,
            spdefense: 20,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}