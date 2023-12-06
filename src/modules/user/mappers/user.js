import { User } from '../domain/user';

export class UserMapper {
  static toDomain(raw) {
    if (!raw) return null;
    return new User({
      id: Number(raw.id),
      balance: Number(raw.balance),
    });
  }

  static toPersistence(user) {
    return {
      id: user.id,
      balance: user.balance,
    };
  }
}
