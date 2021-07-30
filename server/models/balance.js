module.exports = (sequelize, DataTypes) => {

    const balance = sequelize.define("balance", {
        money: {
            type: DataTypes.INTEGER,
            defaultValue: 10000,
        },
        gems: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },  {
        sequelize,
        modelName: "balance",
        timestamps: false,
    })

    balance.associate = models => {
        balance.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return balance

}