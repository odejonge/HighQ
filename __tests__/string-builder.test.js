import stringBuilder from '../functions/string-builder/1.0';
import templayed from '../functions/string-builder/1.0/templayed';
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
});
