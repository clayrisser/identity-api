import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as memoryConfig from './memory.datasource.json';

const { env } = process;
const config = {
  ...memoryConfig,
  localStorage: env.MEMORY_LOCAL_STORAGE || memoryConfig.localStorage,
  file: env.MEMORY_FILE || memoryConfig.file
};

export class MemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'memory';

  constructor(
    @inject('datasources.config.memory', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
