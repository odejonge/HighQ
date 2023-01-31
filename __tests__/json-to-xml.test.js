import jsonToXml from '../functions/json-to-xml/1.0';
describe('JSON to XML', () => {
  test('Convert without root name', async () => {
    const json = {
      new: 'json',
      equals: true,
    };

    const root = '';

    const { as } = await jsonToXml({ input: json, root });

    expect(as).toBe('<new>json</new>\n<equals>true</equals>');
  });

  test('Convert with root name', async () => {
    const json = {
      new: 'json',
      equals: true,
    };

    const root = 'sites';

    const { as } = await jsonToXml({ input: json, root });

    expect(as).toBe('<sites><new>json</new><equals>true</equals></sites>');
  });
});
