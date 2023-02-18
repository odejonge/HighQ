const lukeExpression = async ({ input, expression }) => {
  const pathArray = expression.split('.');
  let current = input;

  for (var key of pathArray) {
    if (Array.isArray(current)) {
      key = parseInt(key);
    }
    if (!current.hasOwnProperty(key)) {
      return undefined;
    }
    current = current[key];
  }

  return {
    as: current,
  };
};

export default lukeExpression;
