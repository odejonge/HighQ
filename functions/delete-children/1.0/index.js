const deleteChildren = async ({ input }) => {
  if (Array.isArray(input)) {
    input.forEach((element) => {
      for (const property in element) {
        typeof input[property] === 'object' && delete input[property];
      }
    });
  } else {
    for (const property in input) {
      typeof input[property] === 'object' && delete input[property];
    }
  }

  return {
    as: input,
  };
};

export default deleteChildren;
