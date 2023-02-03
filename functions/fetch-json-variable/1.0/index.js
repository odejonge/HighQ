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
  if (Object.hasOwn(jsonInput, keyName)) {
    return {
      output: keyName in jsonInput ? jsonInput[keyName] : '',
    };
  } else {
    throw new Error(
      `The key "${keyName}" was not found in object ${JSON.stringify(
        jsonInput
      )}`
    );
  }
};

export default fetchJsonVariable;
