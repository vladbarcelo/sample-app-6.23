import { GenericHTTPController } from '../../../../shared/infra/http/controller';

export class UpdateBalanceHTTPController extends GenericHTTPController {
  constructor(config, useCase) {
    super(config);
    this.useCase = useCase;
  }

  async handle(req, _res) {
    const dto = {
      userID: Number(req.params.id),
      amount: Number(req.query.amount),
    };
    await this.useCase.execute(dto);
  }

  validate(req) {
    if (!req.query.amount || Number.isNaN(Number(req.query.amount))) {
      return { valid: false, error: 'Missing or bad query parameter: amount' };
    }
    if (!req.params.id || Number.isNaN(Number(req.params.id))) {
      return { valid: false, error: 'Missing or bad path parameter: id' };
    }

    return { valid: true };
  }
}
