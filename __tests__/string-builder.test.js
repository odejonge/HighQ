import stringBuilder from '../functions/string-builder/1.0';

describe('String Builder', () => {
  test('Two properties', async () => {
    const baseText = 'replace {{ me }} with {{ something }}';
    const keyValue = [
      {
        key: 'me',
        value: 'you',
      },
      {
        key: 'something',
        value: 'nothing',
      },
    ];
    const { as } = await stringBuilder({ baseText, keyValue });

    expect(as).toEqual('replace you with nothing');
  });

  test('Null property', async () => {
    const baseText = "{{ this }}shouldn't work{{ ending }}";
    const keyValue = [
      {
        key: 'this',
        value: null,
      },
      {
        key: 'ending',
        value: undefined,
      },
    ];
    const { as } = await stringBuilder({ baseText, keyValue });

    expect(as).toEqual("shouldn't work");
  });
});
