const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("activity", {
    /*id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },*/

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true,
    },

    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },

    duracion: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    temporada: {
      type: DataTypes.ENUM("spring", "summer", "fall", "winter"),
      allowNull: false,
    },
  });
};
