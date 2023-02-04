import uriEncodeString from '../functions/uri-encode-string/1.0';

describe('uri encode', () => {
  test('encode string', async () => {
    const input = 'maarten.geerse@bettyblocks.com';

    const { as } = await uriEncodeString({ input });
    expect(as).toBe('maarten.geerse%40bettyblocks.com');
  });
});
