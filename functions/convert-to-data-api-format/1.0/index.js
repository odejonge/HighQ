import _ from 'lodash';

const convertToDataApiFormat = async ({ input, path }) => {
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

  var i = 1;
  result.forEach((element) => {
    for (const key in element) {
      if (Object.hasOwnProperty.call(element, key)) {
        if (key.includes('.')) {
          var newKey = _.last(key.split('.'));
          element[newKey] = element[key];
          delete element[key];
        }
      }
    }

    if (!('id' in element)) {
      element['id'] = i;
    }
    i++;
  });

  return {
    output: {
      totalCount: result.length,
      results: result,
    },
  };
};

export default convertToDataApiFormat;