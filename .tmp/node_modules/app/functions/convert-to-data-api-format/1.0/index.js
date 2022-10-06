const convertToDataApiFormat = async ({ input, path }) => {
  input = JSON.parse(input);

  path &&
    path.split('.').forEach((key) => {
      input = input[key];
    });

  return {
    output: {
      totalCount: input.length,
      results: input,
    },
  };
};

export default convertToDataApiFormat;