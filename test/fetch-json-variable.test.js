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

  const outputThree = await $app['fetchJsonVariable 1.0']({
    jsonInput: {
      access_token: 'x6uPha4TjHWnjNZedSzICJ2wC3BMBM1u',
      refresh_token_expires_in: '31536000',
      expires_in: '2678400',
      refresh_token: 'BNDHbjewLIDZ3z3gbUUTrnOeg8EgLOxu',
      token_type: 'bearer',
      useremail: 'marcel.korporaal@bettyblocks.com',
    },
    keyName: 'access_token',
  });
  assert(outputThree, { output: 'x6uPha4TjHWnjNZedSzICJ2wC3BMBM1u' });
  const outputFour = await $app['fetchJsonVariable 1.0']({
    jsonInput: {
      access_token: 'x6uPha4TjHWnjNZedSzICJ2wC3BMBM1u',
      refresh_token_expires_in: '31536000',
      expires_in: '2678400',
      refresh_token: 'BNDHbjewLIDZ3z3gbUUTrnOeg8EgLOxu',
      token_type: 'bearer',
      useremail: 'marcel.korporaal@bettyblocks.com',
    },
    keyName: 'refresh_token',
  });
  assert(outputFour, { output: 'BNDHbjewLIDZ3z3gbUUTrnOeg8EgLOxu' });
});
