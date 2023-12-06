const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    balance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  await queryInterface.bulkInsert('users', [
    {
      balance: 10000,
    },
  ]);
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('users');
}

module.exports = { name: '0_users', up, down };
