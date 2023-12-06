import { SequelizePGClient } from '../modules/shared/infra/database/client';
import { User } from '../modules/shared/infra/database/models/user';
import { UserSequelizeRepo } from '../modules/user/repo/user';
import { UpdateUserBalanceUseCase } from '../modules/user/use-cases/updateBalance';
import { UpdateBalanceHTTPController } from '../modules/user/infra/http/controllers/updateBalance';
import { UnitOfWorkHelper } from '../modules/shared/infra/database/unit-of-work';
import { SequelizeDatabase } from '../modules/shared/infra/database';

export class App {
  constructor(config, logger) {
    this.config = config;
    this.logger = logger.child({ component: 'app' });
  }

  async bootstrap() {
    this.logger.debug('Building app...');
    const dbHandler = new SequelizeDatabase(this.config.db, this.logger);
    await dbHandler.init();
    const { sequelize } = dbHandler;
    const unitOfWorkHelper = new UnitOfWorkHelper(sequelize);
    const userPGClient = new SequelizePGClient(sequelize, User);
    const userRepo = new UserSequelizeRepo(userPGClient);
    const updateBalanceUseCase = new UpdateUserBalanceUseCase(userRepo, unitOfWorkHelper);
    this.controllers = {
      updateBalance: new UpdateBalanceHTTPController(this.config.http, updateBalanceUseCase),
    };
    this.logger.debug('App ready');
  }
}
