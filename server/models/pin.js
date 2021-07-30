module.exports = (sequelize, DataTypes) => {

    const pin = sequelize.define("pin", {
        pin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        select: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },  {
        sequelize,
        modelName: "pin",
        timestamps: false,
    })

    pin.associate = models => {
        pin.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return pin

}