import _ from 'lodash';

const convertToDataApiFormat = async ({
  input,
  path,
  fields,
  totalCountOverride,
  offsetOverride,
  limitOverride,
}) => {
  try {
    input = JSON.parse(input);
  } finally {
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

    if (path && path.includes('.')) {
      path.split('.').forEach((key) => {
        input = input[key];
      });
    } else if (typeof path !== 'undefined' && path !== '' && path !== null) {
      input = input[path];
    }

    const result = new Array();
    for (let index = 0; index < result.length; index++) {
      if (!('id' in element)) {
        element['id'] = index;
      }
      const element = result[index];
      result.push(flattenObject(element));
    }

    return {
      output: {
        totalCount:
          totalCountOverride !== null ? totalCountOverride : result.length,
        results:
          offsetOverride && limitOverride
            ? result.slice(offsetOverride, offsetOverride + limitOverride)
            : result,
      },
    };
  }
};

export default convertToDataApiFormat;
