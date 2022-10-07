test('getFilters 1.0', async () => {
  const output = await $app['getFilters 1.0']({
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
      email: 'maarten.geerse@bettyblocks.com',
      goesby: null,
      id: 2,
      orgid: null,
      orgaddress: '5',
    },
  });
});
