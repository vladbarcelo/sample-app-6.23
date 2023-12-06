import express from 'express';
import { bindUserHTTPRoutes } from '../modules/user/infra/http/binder';

export default class ExpressBackendServer {
  constructor(cfg, logger, app) {
    this.cfg = cfg;
    this.logger = logger.child({ component: 'server' });
    this.app = app;
  }

  async start() {
    this.logger.debug('Starting express server...');
    const server = express();
    await this.app.bootstrap();
    bindUserHTTPRoutes(server, this.app.controllers);
    server.listen(this.cfg.port, () => {
      this.logger.debug(`App listening on port ${this.cfg.port}`);
    });
  }
}
