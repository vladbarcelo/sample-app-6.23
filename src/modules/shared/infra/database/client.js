export class SequelizePGClient {
  constructor(sequelize, entityClass) {
    this.sequelize = sequelize;
    entityClass.init(sequelize);
    this.entity = entityClass;
  }

  findOne(where, opts = {}) {
    return this.entity.findOne({ where, ...opts });
  }

  update(where, props, opts = {}) {
    return this.entity.update(props, { where, ...opts });
  }
}
