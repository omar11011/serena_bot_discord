const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 493
        this.pokemon = 'Arceus'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 320
        this.altura = 3.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus', item.get('arceusita')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Acero', item.get('tabla acero')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Agua', item.get('tabla agua')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Bicho', item.get('tabla bicho')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Dragón', item.get('tabla draco')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Eléctrico', item.get('tabla trueno')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Fantasma', item.get('tabla fantasma')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Fuego', item.get('tabla flama')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Hada', item.get('tabla hada')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Hielo', item.get('tabla hielo')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Lucha', item.get('tabla lucha')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Planta', item.get('tabla planta')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Psíquico', item.get('tabla mente')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Roca', item.get('tabla roca')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Siniestro', item.get('tabla siniestra')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Tierra', item.get('tabla tierra')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Veneno', item.get('tabla veneno')),
            new Entidades.Evolucion.Temporal('Arceus Tipo Volador', item.get('tabla cielo')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('castigo'), 1],
            [move.get('don natural'), 1],
            [move.get('tierra viva'), 20],
            [move.get('vozarrón'), 30],
            [move.get('velocidad extrema'), 40],
            [move.get('premonición'), 60],
            [move.get('hiperrayo'), 80],
            [move.get('sentencia'), 100],
        ]
        this.stats = {
            hp: 120,
            attack: 120,
            defense: 120,
            spattack: 120,
            spdefense: 120,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}