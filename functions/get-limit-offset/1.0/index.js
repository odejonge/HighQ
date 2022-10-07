const getLimitOffset = async ({ params: { skip, take } }) => {
  return {
    output: {
      offset: skip,
      limit: take,
    },
  };
};

export default getLimitOffset;
