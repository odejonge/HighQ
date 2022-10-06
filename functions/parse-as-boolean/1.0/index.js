const parseAsBoolean = async ({ input }) => {
  return {
    output: input === 'true',
  };
};

export default parseAsBoolean;
