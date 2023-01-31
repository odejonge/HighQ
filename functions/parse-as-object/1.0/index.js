const parseAsArray = async ({ input }) => {
  try {
    input = JSON.parse(input);
  } finally {
    return {
      as: input,
    };
  }
};

export default parseAsArray;
