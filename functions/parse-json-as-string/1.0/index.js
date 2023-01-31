const parseJsonAsString = async ({ input }) => {
  try {
    input = JSON.stringify(input);
  } finally {
    return {
      as: input,
    };
  }
};

export default parseJsonAsString;
