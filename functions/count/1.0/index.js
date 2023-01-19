const count = async ({ countable }) => {
  try {
    JSON.parse(countable);
  } catch (e) {
    throw new Error(e);
  } finally {
    return {
      as: countable.length,
    };
  }
};

export default count;
