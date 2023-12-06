require('dotenv').config();

module.exports = {
  http: {
    port: 8080,
    errors: {
      InsufficientBalanceError: 402,
      ValidationError: 400,
      UserNotFoundError: 404,
    },
  },
  db: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'postgres',
  },
};
