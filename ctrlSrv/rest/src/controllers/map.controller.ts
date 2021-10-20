import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Map} from '../models';
import {MapRepository} from '../repositories';

export interface FilterConstructor {
  new (): FilterExcludingWhere<Map>;
  clone(): FilterExcludingWhere<Map>;
}
export var FilterConcreteConstructor: FilterConstructor;

export class MapController {
  constructor(
    @repository(MapRepository)
    public mapRepository : MapRepository,
  ) {}


  @post('/map')
  @response(200, {
    description: 'Map model instance',
    content: {'application/json': {schema: getModelSchemaRef(Map)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Map, {
            title: 'NewMap',
            exclude: ['id'],
          }),
        },
      },
    })
    map: Omit<Map, 'id'>,
  ): Promise<Map> {
    map.id = 1
    this.mapRepository.replaceById(1, map)
    .then(() => {
      return Promise.resolve(map)
    })
    .catch((error) => {
      this.mapRepository.create(map)
    })
    return Promise.resolve(new Map(map))
  }

  @get('/map')
  @response(200, {
    description: 'Map model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Map, {includeRelations: true}),
      },
    },
  })
  async find(): Promise<Map> {
    let filter
    return this.mapRepository.findById(1, filter)
  }
}
