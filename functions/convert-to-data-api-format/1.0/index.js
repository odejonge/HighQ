import _ from 'lodash';

const convertToDataApiFormat = async ({
  input,
  path,
  fields,
  totalCountOverride,
}) => {
  input = JSON.parse(input);
  function flattenObject(obj, newObj, prefix) {
    newObj = newObj || {};
    prefix = prefix || '';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        const type = typeof obj[key];
        const newKey = !!prefix ? prefix + '.' + key : key;
        if (type !== 'object' || obj[key] === null) {
          newObj[newKey] = obj[key];
        } else if (type === 'object' && obj[key] !== null) {
          flattenObject(obj[key], newObj, newKey);
        }
      }
    }
    return newObj;
  }

  if (Array.isArray(path)) {
    path.split('.').forEach((key) => {
      input = input[key];
    });
  } else if (path) {
    input = input[path];
  }

  const result = new Array();
  input.forEach((element) => {
    result.push(flattenObject(element));
  });

  for (let index = 0; index < result.length; index++) {
    const element = result[index];

    for (const key in element) {
      var newKey = key;
      var value = element[key];
      if (newKey.includes('.')) {
        newKey = _.last(newKey.split('.'));
        value = element[key];
        delete element[key];
      }
      if (JSON.parse(fields).includes(newKey)) {
        element[newKey] = value;
      } else {
        delete element[key];
      }
    }
    if (!('id' in element)) {
      element['id'] = index;
    }
  }

  return {
    output: {
      totalCount: totalCountOverride ? totalCountOverride : result.length,
      results: result,
    },
  };
};

export default convertToDataApiFormat;
