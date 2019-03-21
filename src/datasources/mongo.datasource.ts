import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as mongoConfig from './mongo.datasource.json';
import * as pkg from '../../package.json';

const { env } = process;
const config = {
  ...mongoConfig,
  url: env.MONGO_URL || mongoConfig.url,
  host: env.MONGO_HOST || mongoConfig.host,
  port: Number(env.MONGO_PORT || mongoConfig.port),
  user: env.MONGO_USER || mongoConfig.user,
  password: env.MONGO_PASSWORD || mongoConfig.password,
  database: env.MONGO_DATABASE || pkg.name
};

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
