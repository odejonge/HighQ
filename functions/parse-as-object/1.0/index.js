const parseAsObject = async ({ input }) => {
  try {
    input = JSON.parse(input);
  } finally {
    return {
      as: input,
    };
  }
};

export default parseAsObject;
