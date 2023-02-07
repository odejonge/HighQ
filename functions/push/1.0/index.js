const push = async ({ arrayInput = new Array(), element }) => {
  if (!Array.isArray(arrayInput)) {
    throw new Error("The input array isn't an array.");
  }

  arrayInput.push(element);

  return {
    as: arrayInput,
  };
};

export default push;
