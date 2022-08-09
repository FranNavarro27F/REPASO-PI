const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
    },
    species:{
      type: DataTypes.STRING,
    },
    origin:{
      type: DataTypes.STRING,
    },
    img:{
      type: DataTypes.STRING,
    },
    created:{
      type: DataTypes.STRING,
    },
  },{
    createdAt: false,
    updatedAt: false,
  });
};
