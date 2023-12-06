import { GenericEntity } from '../../shared/domain/entity';
import { InsufficientBalanceError } from './errors';

export class User extends GenericEntity {
  get balance() {
    return this.props.balance;
  }

  updateBalance(by) {
    if (this.props.balance + by < 0) {
      throw new InsufficientBalanceError();
    }

    this.props.balance += by;
  }
}
