const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 914
        this.pokemon = 'Baby Mewtwo'
        this.region = Entidades.Region.Saife
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 38
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Mewtwo', 100)
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('confusión'), 1],
            [move.get('rapidez'), 8],
            [move.get('premonición'), 15],
            [move.get('psicocorte'), 36],
            [move.get('psíquico'), 57],
            [move.get('esfera aural'), 70],
            [move.get('onda mental'), 100],
        ]
        this.stats = {
            hp: 71,
            attack: 60,
            defense: 60,
            spattack: 104,
            spdefense: 60,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}