const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 283
        this.pokemon = 'Surskit'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.7
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Masquerain', 22),
        ]
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('rayo burbuja'), 17],
            [move.get('acua jet'), 30],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 32,
            spattack: 50,
            spdefense: 52,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}