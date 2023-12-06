import { UserMapper } from '../mappers/user';

export class UserSequelizeRepo {
  constructor(client) {
    this.client = client;
  }

  async getByIDForUpdate(id, transaction) {
    const raw = await this.client.findOne({ id }, { transaction, lock: transaction.LOCK.UPDATE });
    return UserMapper.toDomain(raw);
  }

  async save(user, transaction) {
    const { id, ...raw } = UserMapper.toPersistence(user);
    await this.client.update({ id }, raw, { transaction });
  }
}
