const parseAsJson = async ({ input }) => {
  return {
    as: JSON.parse(input),
  };
};

export default parseAsJson;
