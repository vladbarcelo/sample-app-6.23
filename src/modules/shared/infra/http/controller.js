import { ValidationError } from './errors';

export class GenericHTTPController {
  constructor(config) {
    this.config = config;
  }

  async wrap(req, res) {
    try {
      const { valid, error } = this.validate(req);
      if (!valid) throw new ValidationError(error);
      const data = await this.handle(req, res);
      res.json({
        success: true,
        data,
      });
    } catch (error) {
      let status = 500;
      if (this.config.errors[error.constructor.name]) status = this.config.errors[error.constructor.name];
      res.status(status).json({
        success: false,
        message: error.message || error.constructor.name,
      });
    }
  }

  validate(_req) {
    return { valid: true };
  }

  async handle(_req, _res) {
    throw new Error('Method not implemented.');
  }
}
