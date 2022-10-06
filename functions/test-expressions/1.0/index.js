import templayed from "./templayed";
const testExpressions = async ({ expression, variables}) => {
    const variableMap = variables.reduce((previousValue, currentValue) => {
        previousValue[currentValue.key] = currentValue.value;
        return previousValue;
      }, {});

      return {
        output: templayed(expression)(variableMap)
      }
}

export default testExpressions;