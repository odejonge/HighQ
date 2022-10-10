const getFields = async ({ params: { select } }) => {
  return {
    output: JSON.stringify(select),
  };
};

export default getFields;
