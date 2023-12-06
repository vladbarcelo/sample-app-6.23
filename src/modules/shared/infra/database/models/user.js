import { DataTypes, Model } from 'sequelize';

export class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      createdAt: false,
      updatedAt: false,
    });
  }
}
