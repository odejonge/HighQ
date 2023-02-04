const uriEncodeString = async ({ input }) => {
  return {
    as: input.replace(
      /[^\w\.~-]/g,
      (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()
    ),
  };
};

export default uriEncodeString;
