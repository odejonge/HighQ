test('fetchJsonVariable 1.0', async () => {
  const outputOne = await $app['fetchJsonVariable 1.0']({
    jsonInput: { myKey: 'myValue' },
    keyName: 'myKey',
  });
  assert(outputOne, {
    output: 'myValue',
  });

  const outputTwo = await $app['fetchJsonVariable 1.0']({
    jsonInput: { myKey: 'myValue' },
    keyName: 'wrongKey',
  });
  assert(outputTwo, { output: '' });
});
