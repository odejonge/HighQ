const includes = async ({ inputArray, element }) => {
  if (!Array.isArray(inputArray)) {
    throw new Error("The input array isn't an array.");
  }

  return {
    as: inputArray.includes(element),
  };
};

export default includes;
