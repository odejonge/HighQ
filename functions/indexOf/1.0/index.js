const indexOf = async ({ inputArray, element }) => {
  if (!Array.isArray(inputArray)) {
    throw new Error("The input array isn't an array.");
  }

  return {
    as: inputArray.indexOf(element),
  };
};

export default indexOf;
