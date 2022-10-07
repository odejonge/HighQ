const fetchJsonVariable = async ({ jsonInput, keyName }) => {
  try {
    jsonInput = JSON.parse(jsonInput);
  } finally {
    if (!(keyName in jsonInput)) {
      return {
        output: '',
      };
    } else {
      return {
        output: jsonInput[keyName],
      };
    }
  }
};

export default fetchJsonVariable;
