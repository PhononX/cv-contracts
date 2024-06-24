export const LabelSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    behavior: {
      $ref: '#/definitions/LabelBehavior',
    },
    type: {
      $ref: '#/definitions/LabelType',
    },
    creator_guid: {
      type: 'string',
    },
    space_guid: {
      type: ['null', 'string'],
    },
    image_url: {
      type: ['null', 'string'],
    },
    automatic_playlist: {
      type: 'boolean',
    },
    sort_order: {
      type: 'number',
    },
  },
  additionalProperties: false,
  required: ['_id', 'behavior', 'creator_guid', 'name', 'type'],
  definitions: {
    LabelBehavior: {
      type: 'string',
      enum: ['removeOnListenStart', 'removeWhenHeard', 'persistent'],
    },
    LabelType: {
      type: 'string',
      enum: ['personal', 'workspace', 'system', 'reaction'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum LabelKeys {
  _id = '_id',
  name = 'name',
  behavior = 'behavior',
  type = 'type',
  creator_guid = 'creator_guid',
  space_guid = 'space_guid',
  image_url = 'image_url',
  automatic_playlist = 'automatic_playlist',
  sort_order = 'sort_order',
}
