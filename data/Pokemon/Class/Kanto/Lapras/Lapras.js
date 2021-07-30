const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 131
        this.pokemon = 'Lapras'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 220
        this.altura = 2.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Lapras', item.get('laprasita')),
            new Entidades.Evolucion.Gigamax('Lapras Gigamax'),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('canto helado'), 10],
            [move.get('hidropulso'), 14],
            [move.get('golpe cuerpo'), 18],
            [move.get('rayo hielo'), 32],
            [move.get('salmuera'), 37],
            [move.get('hidrobomba'), 47],
            [move.get('frío polar'), 50],
        ]
        this.stats = {
            hp: 130,
            attack: 85,
            defense: 80,
            spattack: 85,
            spdefense: 95,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}