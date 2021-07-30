module.exports = (sequelize, DataTypes) => {

    const pokedex = sequelize.define("pokedex", {
        pokemon: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
    },  {
        sequelize,
        modelName: "pokedex",
        timestamps: false,
    })

    pokedex.associate = models => {
        pokedex.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return pokedex

}