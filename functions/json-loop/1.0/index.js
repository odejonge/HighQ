const jsonLoop = async ({ input, path }, steps) => {
  try {
    input = JSON.parse(input);
  } finally {
    if (Array.isArray(path)) {
      path.split('.').forEach((key) => {
        input = input[key];
      });
    } else if (typeof path !== 'undefined') {
      input = input[path];
    }

    for (let index = 0; index < input.length; index += 1) {
      await steps({ iterator: JSON.stringify(input[index]), index });
    }
  }
};

export default jsonLoop;
