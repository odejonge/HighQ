test('getFilters 1.0', async () => {
  const outputOne = await $app['getFilters 1.0']({
    params: pagebuilderQueryWithConditions,
  });
  assert(outputOne, {
    output: {
      email: 'maarten.geerse@bettyblocks.com',
    },
  });

  const outputTwo = await $app['getFilters 1.0']({
    params: pagebuilderQueryWithoutConditions,
  });
  assert(outputTwo, {
    output: {},
  });
});
