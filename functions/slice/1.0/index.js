const slice = async ({ input, startNumber, endNumber }) => {
  return {
    as: input.slice(startNumber, endNumber),
  };
};

export default slice;
