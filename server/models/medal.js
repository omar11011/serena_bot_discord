module.exports = (sequelize, DataTypes) => {

    const medal = sequelize.define("medal", {
        medal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        view: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },  {
        sequelize,
        modelName: "medal",
        timestamps: false,
    })

    medal.associate = models => {
        medal.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return medal

}