const fetchJsonVariable = async ({ jsonInput, keyName }) => {
  if (jsonInput == null) {
    jsonInput = {};
  }

  if (keyName.includes('.')) {
    keyName.split('.').forEach((value, key, array) => {
      if (key + 1 === array.length) {
        keyName = array[array.length - 1];
        return;
      }
      jsonInput = jsonInput[value];
    });
  }

  return {
    output: keyName in jsonInput ? jsonInput[keyName] : '',
  };
};

export default fetchJsonVariable;
