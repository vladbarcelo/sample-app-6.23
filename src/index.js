import config from 'config';
import Logger from './modules/shared/pkg/logger/bunyan';
import ExpressBackendServer from './server';
import { App } from './app';

(async () => {
  Logger.debug(config);

  const app = new App(config, Logger);
  const server = new ExpressBackendServer(config.http, Logger, app);
  await server.start();
})();
