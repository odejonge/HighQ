const splice = async ({ input, startNumber, endNumber }) => {
  if (!Array.isArray(input)) {
    throw new Error("Couldn't splice. Not an array.");
  } else {
    Array.splice(startNumber);
  }
};

export default splice;
