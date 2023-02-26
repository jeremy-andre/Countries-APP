const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("activity", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },

    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 24,
      },
    },

    temporada: {
      type: DataTypes.ENUM("Spring", "Summer", "Fall", "Winter"),
      allowNull: false,
    },
  });
};
