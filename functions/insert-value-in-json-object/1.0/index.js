const insertValueInJsonObject = async ({ object, key, value }) => {
  object[key] = value;
  return {
    as: object,
  };
};

export default insertValueInJsonObject;
