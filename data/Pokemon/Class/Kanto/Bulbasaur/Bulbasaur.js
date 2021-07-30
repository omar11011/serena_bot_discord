const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 1
        this.pokemon = 'Bulbasaur'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Planta, 
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 6.9
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo, 
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ivysaur', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('derribo'), 15],
            [move.get('hoja afilada'), 19],
            [move.get('doble filo'), 27],
            [move.get('bomba germen'), 37],
            [move.get('rayo solar'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 45,
            defense: 49,
            spattack: 65,
            spdefense: 65,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}