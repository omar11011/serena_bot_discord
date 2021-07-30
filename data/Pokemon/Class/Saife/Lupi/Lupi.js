const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 905
        this.pokemon = 'Lupi'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 10
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lapras', 20),
        ]
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('canto helado'), 10],
            [move.get('hidropulso'), 14],
            [move.get('golpe cuerpo'), 18],
            [move.get('rayo hielo'), 26],
            [move.get('salmuera'), 30],
            [move.get('hidrobomba'), 33],
            [move.get('frío polar'), 40],
        ]
        this.stats = {
            hp: 50,
            attack: 40,
            defense: 50,
            spattack: 55,
            spdefense: 60,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}