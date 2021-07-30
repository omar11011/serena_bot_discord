const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 471
        this.pokemon = 'Glaceon'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 25.9
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Glaceon', item.get('glaceonita')),
            new Entidades.Evolucion.Gigamax('Glaceon Gigamax'),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento hielo'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('colmillo hielo'), 20],
            [move.get('canto helado'), 25],
            [move.get('manto espejo'), 33],
            [move.get('última baza'), 41],
            [move.get('ventisca'), 45],
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 110,
            spattack: 130,
            spdefense: 95,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}