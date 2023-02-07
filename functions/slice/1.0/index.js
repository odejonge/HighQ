const slice = async ({ inputArray, startNumber, endNumber }) => {
  return {
    as: inputArray.slice(startNumber, endNumber),
  };
};

export default slice;
