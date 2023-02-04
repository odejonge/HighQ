const count = async ({ countable }) => {
  return {
    as: countable.length,
  };
};

export default count;
