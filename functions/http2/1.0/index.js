import templayed from './templayed';

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

const https2 = async ({
  url,
  method,
  body,
  headers = [],
  protocol,
  variables,
  queryParameters = [],
}) => {
  //   throw JSON.stringify(variables);
  const variableMap = variables.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});
  const parsedBody = templayed(body)(variableMap);

  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body: parsedBody,
  };

  const response = await fetch(fetchUrl, options);
  const data = await response.text();
  const responseCode = response.status;

  return { as: data, responseCode };
};

export default https2;
