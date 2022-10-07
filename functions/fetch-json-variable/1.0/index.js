const fetchJsonVariable = async ({ jsonInput, keyName }) => {
  try {
    jsonInput = JSON.parse(jsonInput);
  } finally {
    if (!(keyName in jsonInput)) {
      console.error(`Fetch JSON Variable: Key ${keyName} doesn't exist!`);
      return {
        errors: [
          {
            extensions: {
              statusCode: 'ACTION_STEP_ERROR',
            },
            message: `Cannot find ${keyName} in ${JSON.stringify(jsonInput)}`,
          },
        ],
      };
    } else {
      return {
        output: jsonInput[keyName],
      };
    }
  }
};

export default fetchJsonVariable;
