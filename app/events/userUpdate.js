const Base = require('../../util/class/Event')
const downloadImg = require('../../util/functions/downloadImg')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'userUpdate'

        this.exec = async (oldUser, newUser) => {
            if(oldUser.username !== newUser.username) {
                await this.db.trainer.update({ name: newUser.tag }, { where: { user: newUser.id } })
            }

            if(oldUser.avatar !== newUser.avatar) {
                downloadImg(newUser.avatarURL({ format: 'png' }), 'avatar/' + newUser.id + '.png', () => {
                    this.log.success('He actualizado el avatar de ' + newUser.tag + ' (' + newUser.id + ')')
                })
            }
        }
    }
}

module.exports = Event