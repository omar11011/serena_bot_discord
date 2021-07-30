const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 313
        this.pokemon = 'Volbeat'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 17.7
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 150
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 12],
            [move.get('estoicismo'), 15],
            [move.get('doble rayo'), 26],
            [move.get('cabezazo zen'), 33],
            [move.get('zumbido'), 40],
            [move.get('carantoña'), 43],
            [move.get('doble filo'), 47],
            [move.get('acoso'), 50],
        ]
        this.stats = {
            hp: 65,
            attack: 73,
            defense: 75,
            spattack: 47,
            spdefense: 85,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}