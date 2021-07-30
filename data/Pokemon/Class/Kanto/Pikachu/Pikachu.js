const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 25
        this.pokemon = 'Pikachu'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Item('Raichu', item.get('piedra trueno')),
            new Entidades.Evolucion.Gigamax('Pikachu Gigamax'),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('bola voltio'), 13],
            [move.get('cola férrea'), 17],
            [move.get('amago'), 21],
            [move.get('chispa'), 26],
            [move.get('moflete estático'), 29],
            [move.get('chispazo'), 34],
            [move.get('atizar'), 37],
            [move.get('rayo'), 42],
            [move.get('voltio cruel'), 50],
            [move.get('trueno'), 58],
            [move.get('tacleada de voltios'), 60],
        ]
        this.stats = {
            hp: 35,
            attack: 55,
            defense: 40,
            spattack: 50,
            spdefense: 50,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}