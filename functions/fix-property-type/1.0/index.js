const fixMyType = (obj, keyName, setTo) => {
  console.log(
    `Fixing object ${JSON.stringify(
      obj
    )} with keyname ${keyName} and setting it to ${setTo}`
  );
  if (setTo === 'text') {
    obj[keyName] = String(obj[keyName]);
  } else if (setTo === 'number') {
    obj[keyName] = parseInt(obj[keyName]);
  }

  console.log(`This resulted in ${JSON.stringify(obj)}`);

  return obj;
};

const fixPropertyType = async ({ input, keyName, setTo }) => {
  console.log(`Being inserted with: ${JSON.stringify(input)}`);
  let as;
  if (Array.isArray(input)) {
    as = new Array();
    input.forEach((element) => {
      as.push(fixMyType(element, keyName, setTo));
    });
  } else {
    as = fixMyType(input, keyName, setTo);
  }

  console.log('INTERNAL: final output: ', JSON.stringify(as));

  return {
    as,
  };
};

export default fixPropertyType;
