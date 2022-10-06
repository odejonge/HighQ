import { toNumber } from 'lodash';

const parseAsInteger = async ({ input }) => {
  return {
    output: toNumber(input),
  };
};

export default parseAsInteger;
