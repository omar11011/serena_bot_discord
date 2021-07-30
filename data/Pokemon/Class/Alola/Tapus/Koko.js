const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 785
        this.pokemon = 'Tapu Koko'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 20.5
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('pájaro osado'), 1],
            [move.get('falsotortazo'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('impactrueno'), 1],
            [move.get('chispa'), 8],
            [move.get('onda voltio'), 14],
            [move.get('voltio cruel'), 32],
            [move.get('furia natural'), 43],
            [move.get('chispazo'), 48],
            [move.get('bola voltio'), 58],
        ]
        this.stats = {
            hp: 70,
            attack: 115,
            defense: 85,
            spattack: 95,
            spdefense: 75,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}