const push = async ({ arrayInput = new Array(), element }) => {
  console.log(JSON.stringify(arrayInput));
  if (!Array.isArray(arrayInput)) {
    throw new Error("The input array isn't an array.");
  }
  console.log(element);
  arrayInput.push(element);
  console.log(arrayInput);
  return {
    as: arrayInput,
  };
};

export default push;
