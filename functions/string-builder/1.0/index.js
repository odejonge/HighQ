import templayed from './templayed';
const stringBuilder = async ({ baseText, keyValue }) => {
  let variableMap = keyValue.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  return {
    as: templayed(baseText)(variableMap),
  };
};

export default stringBuilder;
