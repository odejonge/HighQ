test('convertToDataApiFormat 1.0', async () => {
  const output = await $app['convertToDataApiFormat 1.0']({
    input: JSON.stringify(peoplesJson),
    path: 'person',
  });
  assert(output, {
    output: {
      totalCount: 5,
      results: peoplesJson['person'],
    },
  });
});
