const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 386
        this.pokemon = 'Deoxys'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 60.8
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Deoxys Forma Ataque'),
            new Entidades.Evolucion.Temporal('Deoxys Forma Defensa'),
            new Entidades.Evolucion.Temporal('Deoxys Forma Velocidad'),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('tinieblas'), 7],
            [move.get('desarme'), 19],
            [move.get('persecución'), 25],
            [move.get('psíquico'), 31],
            [move.get('cabezazo zen'), 49],
            [move.get('psicoataque'), 67],
            [move.get('hiperrayo'), 73],
        ]
        this.stats = {
            hp: 50,
            attack: 150,
            defense: 50,
            spattack: 150,
            spdefense: 50,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}