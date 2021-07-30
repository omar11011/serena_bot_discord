const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 786
        this.pokemon = 'Tapu Lele'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 18.6
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('beso drenaje'), 1],
            [move.get('impresionar'), 1],
            [move.get('confusión'), 1],
            [move.get('psicoonda'), 8],
            [move.get('psicorrayo'), 14],
            [move.get('psicocarga'), 32],
            [move.get('furia natural'), 43],
            [move.get('paranormal'), 48],
            [move.get('fuerza lunar'), 58],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 75,
            spattack: 130,
            spdefense: 115,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}