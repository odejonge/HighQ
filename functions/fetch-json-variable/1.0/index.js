const fetchJsonVariable = async ({ jsonInput, variableName }) => {
  try {
    jsonInput = JSON.parse(jsonInput);
  } finally {
    return {
      output: jsonInput[variableName],
    };
  }
};

export default fetchJsonVariable;
