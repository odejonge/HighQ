const count = async ({ countable }) => {
  try {
    return {
      as: countable.length,
    };
  } catch (e) {
    throw new Error(e);
  }
};

export default count;
