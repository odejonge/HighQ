import disectParams from '../functions/disect-params/1.0';
const paramsObj = {
  auth_info: { auth_profile: null, raw_jwt: null, user_id: null },
  conditions: [],
  data_source_info: {
    kind: 'OpenAPIv2',
    model: {
      meta_info: {
        methods: [
          { endpoint: '/{version}/organisations/{orgid}', method: 'get' },
          { endpoint: '/{version}/organisations', method: 'post' },
        ],
        schema_type: '#/definitions/organisation',
      },
    },
    source: {
      api_key_required: true,
      host: 'https://raw.githubusercontent.com/bettyblocks/datasources-meta-descriptions/main/highq.json',
    },
  },
  input: null,
  select: [
    'strategic',
    'homepage',
    'onlineserviceslink',
    'disableeditprofile',
    'status',
    'activateautologin',
    'link',
    'logoid',
    'name',
    'createddate',
    'companyswitchboard',
    'logowidth',
    'logoheight',
    'id',
    'internal',
    'noofusers',
    'guid',
    'category',
    'orgindustryid',
    'restrictdirectlogin',
    'excludesynchronization',
    'url',
    'orgid',
    'externalid',
  ],
  skip: 0,
  sort: null,
  take: 5,
  total_count: true,
  variables: [],
};

describe('Get Limit, Offset, Fields & Filters', () => {
  test('Test', async () => {
    const { offset, limit, fields, filters } = await disectParams({
      params: paramsObj,
    });
    expect(offset).not.toBeNull();
    expect(limit).not.toBeNull();
    expect(fields).not.toBeNull();
    expect(filters).not.toBeNull();
  });
});
