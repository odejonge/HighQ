test('getFields 1.0', async () => {
  const outputOne = await $app['getFields 1.0']({
    params: {
      select: [
        'userid',
        'email',
        'httpavatar',
        'avatar',
        'userlink',
        'httplink',
        'title',
        'firstname',
        'lastname',
        'goesby',
        'orgname',
        'orgid',
        'orgaddress',
        'id',
      ],
    },
  });
  assert(outputOne, {
    output:
      '["userid","email","httpavatar","avatar","userlink","httplink","title","firstname","lastname","goesby","orgname","orgid","orgaddress","id"]',
  });
});
