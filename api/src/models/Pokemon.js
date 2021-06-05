const { DataTypes } = require('sequelize');

const { UUID, STRING, INTEGER } = DataTypes;
module.exports = sequelize => {
  sequelize.define("pokemon", {
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: STRING,
      allowNull: false
    },
    hp: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    baseExperience: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    defense: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    speed: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    height: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    weight: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    image: {
      type: STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCreate: pokemon => {
        pokemon.name = pokemon.name.toLowerCase();
        return pokemon;
      }
    }
  }
  );
};