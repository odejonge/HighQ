import count from '../functions/count/1.0';
describe('Count', () => {
  const array = [
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
    const { as } = await count({ countable: array });
    expect(as).not.toBeNull();
    expect(as).toEqual(2);
  });

  test('Not an array', async () => {
    await expect(count({ count: undefined })).rejects.toThrow();
  });
});
