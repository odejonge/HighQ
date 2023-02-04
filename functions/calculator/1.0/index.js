const calculator = async ({ firstNumber, secondNumber, method }) => {
  let as;

  if (method === 'add') {
    as = firstNumber + secondNumber;
  } else if (method === 'subtract') {
    as = firstNumber - secondNumber;
  } else if (method === 'multiply') {
    as = firstNumber * secondNumber;
  } else if (method === 'divide') {
    as = firstNumber / secondNumber;
  }

  return { as };
};

export default calculator;
