const setPresence = client => {
    client.user.setPresence( {
        activity: {
            name: `s!help | ${client.guilds.cache.size} servers`,
            type: "WATCHING"
        },
        status: "online"
    })
}

module.exports = setPresence