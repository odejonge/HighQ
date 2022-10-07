const getFilters = async ({ params: { where } }) => {
  let result = {};

  let propName = '';
  const getFilters = (condition) => {
    for (const [key, value] of Object.entries(condition)) {
      if (typeof value !== 'object' || value === null) {
        result[propName] = value;
      } else if (
        (typeof value === 'object' || Array.isArray(value)) &&
        value !== null
      ) {
        propName = key;
        getFilters(condition[key]);
      }
    }
    return result;
  };

  return {
    output: getFilters(where),
  };
};

export default getFilters;
