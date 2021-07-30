const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 361
        this.pokemon = 'Snorunt'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 16.8
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Glalie', 42),
            new Entidades.Evolucion.Item('Froslass', item.get('piedra alba'), true),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('canto helado'), 10],
            [move.get('viento hielo'), 14],
            [move.get('mordisco'), 19],
            [move.get('colmillo hielo'), 23],
            [move.get('golpe cabeza'), 28],
            [move.get('vaho gélido'), 37],
            [move.get('triturar'), 41],
            [move.get('ventisca'), 46],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 50,
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