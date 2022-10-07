test('getLimitOffset 1.0', async () => {
  const output = await $app['getLimitOffset 1.0']({
    params: {
      where: {
        _or: [
          {
            _and: [
              {
                email: {
                  eq: 'maarten.geerse@bettyblocks.com',
                },
              },
            ],
          },
          {
            _and: [
              {
                goesby: {
                  eq: null,
                },
              },
            ],
          },
          {
            _and: [
              {
                id: {
                  lt: 2,
                },
              },
            ],
          },
          {
            _and: [
              {
                orgid: {
                  neq: null,
                },
              },
              {
                orgaddress: {
                  ends_with: '5',
                },
              },
            ],
          },
        ],
      },
      skip: 0,
      take: 5,
    },
  });
  assert(output, {
    output: {
      limit: 5,
      offset: 0,
    },
  });
});
