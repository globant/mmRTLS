import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Map extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;
  
  @property({
    type: 'number',
    dataType: 'float',
    precision: 20,
    scale: 5,
    generated: false,
    required: true,
  })
  sizeX: number;

  @property({
    type: 'number',
    dataType: 'float',
    precision: 20,
    scale: 5,
    generated: false,
    required: true,
  })
  sizeY: number;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl: string;

  @property({
    type: 'number',
    dataType: 'float',
    precision: 20,
    scale: 5,
    generated: false,
    default: 0,
  })
  posX?: number;

  @property({
    type: 'number',
    dataType: 'float',
    precision: 20,
    scale: 5,
    generated: false,
    default: 0,
  })
  posY?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Map>) {
    super(data);
  }
}

export interface MapRelations {
  // describe navigational properties here
}

export type MapWithRelations = Map & MapRelations;
