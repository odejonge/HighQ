import http3 from '../functions/http3/1.0';

describe('Native http', () => {
  test('Makes a succesfull http call.', async () => {
    // expect.assertions(1);

    const request = {
      url: 'http://example.com',
      method: 'get',
      bodyParameters: [
        {
          key: 'one',
          value: 'two',
        },
        {
          key: 'three',
          value: 'four',
        },
      ],
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=UTF-8' },
      ],
      protocol: 'http',
      queryParameters: [{ key: 'name', value: 'foo' }],
      sendAsFormData: false,
    };

    const { as } = await http3(request);

    expect(as).toBe('return text');
  });

  test('Makes a succesfull http call with formdata.', async () => {
    // expect.assertions(1);

    const request = {
      url: 'http://example.com',
      method: 'get',
      bodyParameters: [
        {
          key: 'one',
          value: 'two',
        },
        {
          key: 'three',
          value: 'four',
        },
      ],
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=UTF-8' },
      ],
      protocol: 'http',
      queryParameters: [{ key: 'name', value: 'foo' }],
      sendAsFormData: true,
    };

    const { as } = await http3(request);

    expect(as).toBe('return text');
  });
  test('Will crash when fetch throws errors.', () => {
    // expect.assertions(1);

    const request = {
      url: 'http://error.com',
      method: 'get',
      bodyParameters: [
        {
          key: 'one',
          value: 'two',
        },
        {
          key: 'three',
          value: 'four',
        },
      ],
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=UTF-8' },
      ],
      protocol: 'http',
      queryParameters: [{ key: 'name', value: 'foo' }],
    };
    http3(request).catch(({ message }) => {
      expect(message).toBe('fetch failed');
    });
  });
});
