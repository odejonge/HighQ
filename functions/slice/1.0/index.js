const slice = async ({ input, startNumber, endNumber }) => {
  console.log(input);
  return {
    as: input.slice(startNumber, endNumber),
  };
};

export default slice;
