const parseAsArray = async ({ input }) => {
  try {
    JSON.parse(input);
  } finally {
    return {
      as: input,
    };
  }
};

export default parseAsArray;
