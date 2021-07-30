const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 871
        this.pokemon = 'Pincurchin'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('impactrueno'), 1],
            [move.get('corte furia'), 15],
            [move.get('chispa'), 20],
            [move.get('rayo burbuja'), 25],
            [move.get('puya nociva'), 45],
            [move.get('electropunzada'), 50],
            [move.get('chispazo'), 60],
        ]
        this.stats = {
            hp: 48,
            attack: 101,
            defense: 95,
            spattack: 91,
            spdefense: 85,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}