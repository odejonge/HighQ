test('fetchJsonVariable 1.0', async () => {
  const output = await $app['fetchJsonVariable 1.0']({
    jsonInput: { myKey: 'myValue' },
    variableName: 'myKey',
  });
  assert(output, {
    output: 'myValue',
  });
});
