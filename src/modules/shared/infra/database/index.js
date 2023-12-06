import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import migrations from './migrations';
import { panic } from '../../pkg/panic';

export class SequelizeDatabase {
  constructor(config, logger) {
    this.config = config;
    this.logger = logger.child({ component: 'db' });
  }

  async init() {
    try {
      this.logger.debug('Connecting to DB...');
      this.sequelize = new Sequelize({
        dialect: 'postgres',
        database: this.config.database,
        username: this.config.user,
        password: this.config.password,
        host: this.config.host,
        port: this.config.port,
        logging: (msg) => this.logger.debug(msg),
      });
      await this.sequelize.authenticate();

      this.logger.debug('Running migrations...');
      const umzug = new Umzug({
        migrations,
        context: this.sequelize.getQueryInterface(),
        storage: new SequelizeStorage({ sequelize: this.sequelize }),
        logger: this.logger,
      });
      await umzug.up();
    } catch (err) {
      panic(err.message, this.logger);
    }
  }
}
