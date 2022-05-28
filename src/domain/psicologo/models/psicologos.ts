const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING(300),
    },
    apresentacao: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    bairro: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "psicologos",
  }
);
