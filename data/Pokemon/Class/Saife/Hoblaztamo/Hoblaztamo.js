const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 908
        this.pokemon = 'Hoblaztamo'
        this.region = Entidades.Region.Saife
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Hada,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 120
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('golpe roca'), 8],
            [move.get('golpe kárate'), 16],
            [move.get('patada giro'), 24],
            [move.get('triple patada'), 32],
            [move.get('puntapié'), 40],
            [move.get('choque anímico'), 48],
            [move.get('voto fuego'), 56],
            [move.get('carantoña'), 64],
            [move.get('onda ígnea'), 72],
            [move.get('patada salto alta'), 80],
            [move.get('sofoco'), 88],
        ]
        this.stats = {
            hp: 100,
            attack: 150,
            defense: 90,
            spattack: 140,
            spdefense: 90,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}