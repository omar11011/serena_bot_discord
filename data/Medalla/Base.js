const { join } = require('path')
const { readFileSync } = require('fs')

const nameImg = require('../../util/functions/nameImg')

class Medal {
    constructor() {
        this.image = () => {
            return readFileSync(join(__dirname, '../../client/public/img/medal/' + nameImg(this.nombre) + '.png'))
        }
    }
}

module.exports = Medal