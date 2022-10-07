test('getLimitOffset 1.0', async () => {
  const output = await $app['getLimitOffset 1.0']({
    params: {
      auth_info: {
        auth_profile: null,
        raw_jwt: null,
        user_id: null,
      },
      conditions: [],
      data_source_info: {
        kind: 'OpenAPIv2',
        model: {
          meta_info: {
            methods: [
              {
                endpoint: '/{version}/sites/people',
                method: 'get',
              },
            ],
            schema_type: '#/definitions/PersonDBO',
          },
        },
        source: {
          api_key: null,
          api_key_required: true,
          host: 'https://marcel.bettywebblocks.com/ghqswagger',
        },
      },
      input: null,
      select: [
        'avatar',
        'httpavatar',
        'title',
        'goesby',
        'orgname',
        'orgid',
        'userid',
        'userlink',
        'httplink',
        'id',
        'firstname',
        'lastname',
        'orgaddress',
        'email',
      ],
      skip: 0,
      sort: null,
      take: 5,
      total_count: true,
      variables: [],
    },
  });
  assert(output, {
    output: {
      limit: 5,
      offset: 0,
    },
  });
});
