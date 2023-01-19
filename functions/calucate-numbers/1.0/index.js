const calucateNumbers = async ({ numberOne, numberTwo, method }) => {
  switch (method) {
    case 'Add':
      return {
        as: parseInt(numberOne) + parseInt(numberTwo),
      };
    case 'Subtract':
      return {
        as: parseInt(numberOne) - parseInt(numberTwo),
      };
    case 'Divide':
      return {
        as: parseInt(numberOne) / parseInt(numberTwo),
      };
    case 'Multiply':
      return {
        as: parseInt(numberOne) * parseInt(numberTwo),
      };
  }
};

export default calucateNumbers;
