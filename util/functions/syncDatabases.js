const Database = require('../../server/models')
const Log = require('../class/Log')

const sync = (status = false) => {
    Database.sequelize
        .sync({ force: status })
        .then(() => {
            Log.success('Base de Datos sincronizada.')
        })
        .catch(err => Log.error(err))
}

module.exports = sync