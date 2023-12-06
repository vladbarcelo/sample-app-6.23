import { Transaction } from 'sequelize';

export class UnitOfWorkHelper {
  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  runTransactional(fn, isolationLevel) {
    return this.sequelize.transaction({ isolationLevel }, fn);
  }
}

export const { ISOLATION_LEVELS } = Transaction;
