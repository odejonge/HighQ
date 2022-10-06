import { toString } from 'lodash';

const parseAsString = async ({ input }) => {
  return {
    output: toString(input),
  };
};

export default parseAsString;
