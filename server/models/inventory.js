module.exports = (sequelize, DataTypes) => {

    const inventory = sequelize.define("inventory", {
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        uses: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },  {
        sequelize,
        modelName: "inventory",
        timestamps: false,
    })

    inventory.associate = models => {
        inventory.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return inventory

}