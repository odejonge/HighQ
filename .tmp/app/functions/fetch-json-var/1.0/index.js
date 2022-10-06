const fetchJsonVar = async ({ jsonInput, variableName }) => {
  return {
    output: JSON.parse(jsonInput)[variableName],
  };
};

export default fetchJsonVar;
