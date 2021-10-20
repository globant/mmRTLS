import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Map, MapRelations} from '../models';

export class MapRepository extends DefaultCrudRepository<
  Map,
  typeof Map.prototype.navId,
  MapRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Map, dataSource);
  }
}
