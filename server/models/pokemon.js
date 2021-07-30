module.exports = (sequelize, DataTypes) => {

    const pokemon = sequelize.define("pokemon", {
        pokemon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ball: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        select: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        shiny: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nature: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        xp: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spattack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spdefense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        iv: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        hp_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        attack_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        defense_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        spattack_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        spdefense_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        speed_pe: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },    
        life: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
        },
        friendship: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        object: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        gigamax: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        dynamax: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        moves: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },  {
        sequelize,
        modelName: "pokemon",
        timestamps: false,
    })

    pokemon.associate = models => {
        pokemon.belongsTo(models.trainer, {
            as: "trainer",
        })
    }

    return pokemon

}