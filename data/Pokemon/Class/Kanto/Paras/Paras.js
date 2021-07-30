const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 46
        this.pokemon = 'Paras'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Parasect', 24),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('absorber'), 11],
            [move.get('chupavidas'), 11],
            [move.get('corte furia'), 17],
            [move.get('cuchillada'), 27],
            [move.get('gigadrenado'), 38],
            [move.get('tijera x'), 54],
        ]
        this.stats = {
            hp: 35,
            attack: 70,
            defense: 55,
            spattack: 45,
            spdefense: 55,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}