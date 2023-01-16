import _ from 'lodash';
const jsonBuilder = async ({ appendObject = {}, keyValue }) => {
  let variableMap = keyValue.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  for (const key in variableMap) {
    if (key.includes('.')) {
      _.set(variableMap, key.split('.'), variableMap[key]);
      delete variableMap[key];
    }
  }

  const result = { ...variableMap, ...appendObject };

  return {
    output: result,
  };
};

export default jsonBuilder;
