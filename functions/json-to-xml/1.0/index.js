// import convert from 'xml-js';
import { XMLBuilder } from 'fast-xml-parser';

const jsonToXml = async ({ input, root }) => {
  let finalObj = {};
  if (input == null) input = {};
  else finalObj = input;

  console.log('rootname is: ', root);

  if (root !== '') finalObj[root] = input;

  console.log(finalObj);

  return {
    as: new XMLBuilder({}).build(finalObj),
  };
};

export default jsonToXml;
