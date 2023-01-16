import count from '../functions/count/1.0';
describe('Count', () => {
  const arrayOfItems = [
    {
      name: 'one',
      someId: 123,
    },
    {
      name: 'two',
      someId: 234,
    },
  ];
  test('Count array', async () => {
    const { as } = await count({ countable: arrayOfItems });
    expect(as).not.toBeNull();
    expect(as).toEqual(2);
  });

  test('Not an array', async () => {
    await expect(count({ count: null })).rejects.toThrow();
  });
});
