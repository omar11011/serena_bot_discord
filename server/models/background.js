module.exports = (sequelize, DataTypes) => {

    const background = sequelize.define("background", {
        background: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        select: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },  {
        sequelize,
        modelName: "background",
        timestamps: false,
    })

    background.associate = models => {
        background.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return background

}