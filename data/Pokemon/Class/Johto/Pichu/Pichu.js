const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 172
        this.pokemon = 'Pichu'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Pikachu'),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('impactrueno'), 1],
        ]
        this.stats = {
            hp: 20,
            attack: 40,
            defense: 15,
            spattack: 35,
            spdefense: 35,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}