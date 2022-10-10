test('convertToDataApiFormat 1.0', async () => {
  const output = await $app['convertToDataApiFormat 1.0']({
    input: JSON.stringify(peoplesJson),
    fields:
      '["userid","email","httpavatar","avatar","userlink","httplink","title","firstname","lastname","goesby","orgname","orgid","orgaddress","id"]',
    path: 'person',
  });
  assert(output, {
    output: {
      totalCount: 5,
      results: convertedResponse,
    },
  });
});
