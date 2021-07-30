const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 150
        this.pokemon = 'Mewtwo'
        this.region = Entidades.Region.Kanto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 122
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Mewtwo Acorazado', item.get('armadura')),
            new Entidades.Evolucion.Mega('Mega Mewtwo X', item.get('mewtwoita x')),
            new Entidades.Evolucion.Mega('Mega Mewtwo Y', item.get('mewtwoita y')),
        ]
        this.captura = 3
        this.amistad = 0
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
            hp: 106,
            attack: 110,
            defense: 90,
            spattack: 154,
            spdefense: 90,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}