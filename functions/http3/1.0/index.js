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

  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body: method !== 'get' && !sendAsFormData ? { newBody } : undefined,
    FormData: method !== 'get' && sendAsFormData ? bodyParameters : undefined,
  };

  const response = await fetch(fetchUrl, options);
  const data = await response.text();

  return { as: data };
};

export default http3;
