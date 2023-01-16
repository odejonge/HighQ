import fetchJsonVariable from '../functions/fetch-json-variable/1.0';

describe('Fetch variables from a JSON Object', () => {
  test('Fetch variable a from JSON', async () => {
    const jsonInput = {
      myKey: 'myValue',
    };
    const keyName = 'myKey';
    const { output } = await fetchJsonVariable({ jsonInput, keyName });

    expect(output).not.toBeNull();
    expect(output).toEqual('myValue');
  });

  test('Fetch nested variable from JSON', async () => {
    const jsonInput = {
      myParent: {
        myKey: 'myValue',
      },
    };
    const keyName = 'myParent.myKey';
    const { output } = await fetchJsonVariable({ jsonInput, keyName });

    expect(output).not.toBeNull();
    expect(output).toEqual('myValue');
  });
});
