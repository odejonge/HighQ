import provisonFields from '../functions/provison-fields/1.0';
const fields =
  '["orgindustryid","restrictdirectlogin","excludesynchronization","url","orgid","externalid"]';
describe('Provision fields', () => {
  test('Get fields from params and add them to the input object', async () => {
    const { as } = await provisonFields({
      fields: fields,
      input: {
        property: 'here',
        another: 'one',
        there: 'nice',
      },
    });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      property: 'here',
      another: 'one',
      there: 'nice',
      externalid: null,
      orgid: null,
      url: null,
      excludesynchronization: null,
      restrictdirectlogin: null,
      orgindustryid: null,
    });
  });

  test('Get fields from params and add them to the input array', async () => {
    const { as } = await provisonFields({
      fields: fields,
      input: [
        {
          property: 'here',
          another: 'one',
          there: 'nice',
        },
        {
          property: 'here',
          another: 'one',
          there: 'nice',
        },
      ],
    });
    expect(as).not.toBeNull();
    expect(as).toEqual([
      {
        property: 'here',
        another: 'one',
        there: 'nice',
        externalid: null,
        orgid: null,
        url: null,
        excludesynchronization: null,
        restrictdirectlogin: null,
        orgindustryid: null,
      },
      {
        property: 'here',
        another: 'one',
        there: 'nice',
        externalid: null,
        orgid: null,
        url: null,
        excludesynchronization: null,
        restrictdirectlogin: null,
        orgindustryid: null,
      },
    ]);
  });

  test('Not an array', async () => {
    await expect(provisonFields({ fields: null, input: {} })).rejects.toThrow();
  });
});
