const parseHeaders = (headers) =>
  headers.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});

const parseQueryParameters = (queryParameters) =>
  queryParameters
    .map(({ key, value }, index) => {
      const paramKey = index === 0 ? `?${key}` : key;
      return `${paramKey}=${encodeURIComponent(value)}`;
    })
    .join('&');

const generateUrl = (url, protocol, queryParameters) =>
  `${protocol}://${url}${parseQueryParameters(queryParameters)}`;

const parseBodyParameters = (bodyParameters) => {
  bodyParameters.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});
};

const http3 = async ({
  url,
  method,
  headers = [],
  protocol,
  queryParameters = [],
  bodyParameters = [],
  sendAsFormData,
}) => {
  let newBody = bodyParameters.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  console.log(newBody);

  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body:
      method !== 'get' && !sendAsFormData
        ? { ...parseBodyParameters(newBody) }
        : undefined,
    formData: [
      {
        key: 'client_id',
        value: '1237',
      },
      {
        key: 'client_secret',
        value: 'PRaKUYMxvGhYPk8yWDTc9z3TB9xd8SBh',
      },
      {
        key: 'code',
        value: 'nrO2Zky5UN',
      },
      {
        key: 'grant_type',
        value: 'authorization_code',
      },
    ],
  };

  console.log(options);

  //method !== 'get' && sendAsFormData ? [...bodyParameters] : undefined,

  const response = await fetch(fetchUrl, options);
  const data = await response.text();

  return { as: data };
};

export default http3;
