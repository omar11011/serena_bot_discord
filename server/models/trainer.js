module.exports = (sequelize, DataTypes) => {

    const trainer = sequelize.define("trainer", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: 'Trainer',
        },
        region: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: true,  
        },
        ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        breed: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        bracelet: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },  {
        sequelize,
        modelName: "trainer",
        indexes: [
            {
                unique: true,
                fields: ['user']
            }
        ],
        timestamps: false,
    })

    trainer.associate = models => {
        trainer.hasOne(models.balance, {
            as: "balance",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.inventory, {
            as: "inventory",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.pokemon, {
            as: "pokemon",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.pokedex, {
            as: "pokedex",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.pin, {
            as: "pin",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.background, {
            as: "background",
            foreignKey: "trainerId",
        })
        trainer.hasMany(models.medal, {
            as: "medal",
            foreignKey: "trainerId",
        })
    }

    return trainer

}