import { ISOLATION_LEVELS } from '../../shared/infra/database/unit-of-work';
import { UserNotFoundError } from '../domain/errors';

export class UpdateUserBalanceUseCase {
  constructor(userRepo, uowhHelper) {
    this.userRepo = userRepo;
    this.uowhHelper = uowhHelper;
  }

  async execute({ userID, amount }) {
    await this.uowhHelper.runTransactional(async (tx) => {
      const user = await this.userRepo.getByIDForUpdate(userID, tx);
      if (!user) throw new UserNotFoundError();
      user.updateBalance(amount);
      await this.userRepo.save(user, tx);
    }, ISOLATION_LEVELS.READ_COMMITTED);
  }
}
