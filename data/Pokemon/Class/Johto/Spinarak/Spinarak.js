const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 167
        this.pokemon = 'Spinarak'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 8.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ariados', 22),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('absorber'), 5],
            [move.get('acoso'), 8],
            [move.get('tinieblas'), 15],
            [move.get('sombra vil'), 19],
            [move.get('golpes furia'), 22],
            [move.get('golpe bajo'), 26],
            [move.get('pin misil'), 36],
            [move.get('psíquico'), 40],
            [move.get('puya nociva'), 43],
            [move.get('veneno x'), 47],
        ]
        this.stats = {
            hp: 40,
            attack: 60,
            defense: 40,
            spattack: 40,
            spdefense: 40,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}