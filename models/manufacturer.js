'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Manufacturers extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Manufacturers.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      keywords: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contactInfo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      lat: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      lng: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      brand: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Manufacturers',
      tableName: 'Manufacturers',
      schema: 'public',
      timestamps: true,
      indexes: [
        {
          name: 'Manufacturers_pkey',
          unique: true,
          fields: [
            { name: 'id' },
          ],
        },
      ],
    }
  );

  return Manufacturers;
};
