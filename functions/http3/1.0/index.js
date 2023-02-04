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
  return bodyParameters.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});
};
const customEncode = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => {
      let encoded = value.replace(
        /[^\w\.~-]/g,
        (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()
      );
      return key + '=' + encoded;
    })
    .join('&');
};

const http3 = async ({
  url,
  method,
  headers = [],
  protocol,
  queryParameters = [],
  bodyParameters = [],
  useCustomEncode,
}) => {
  bodyParameters = parseBodyParameters(bodyParameters);

  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body:
      method !== 'get'
        ? !useCustomEncode
          ? { ...bodyParameters }
          : customEncode(bodyParameters)
        : undefined,
  };

  //method !== 'get' && sendAsFormData ? [...bodyParameters] : undefined,

  const response = await fetch(fetchUrl, options);
  const data = await response.text();

  return { as: data };
};

export default http3;
