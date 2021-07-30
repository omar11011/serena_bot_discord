const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 23
        this.pokemon = 'Ekans'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.9
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Arbok', 22),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('picotazo venenoso'), 4],
            [move.get('mordisco'), 9],
            [move.get('ácido'), 20],
            [move.get('escupir'), 15],
            [move.get('bomba ácida'), 28],
            [move.get('bomba fango'), 33],
            [move.get('eructo'), 38],
            [move.get('lanza mugre'), 48],
        ]
        this.stats = {
            hp: 35,
            attack: 60,
            defense: 44,
            spattack: 40,
            spdefense: 54,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}