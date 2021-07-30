const findUser = (message, client, id = false) => {
    let user

    if(message) {
        user = message.author
        let mencion = message.mentions.users.first()
        if(mencion) id = mencion.id
    }
    if(id) user = client.users.cache.get(id)
    if(typeof user === 'undefined') return false

    return user
}

module.exports = findUser