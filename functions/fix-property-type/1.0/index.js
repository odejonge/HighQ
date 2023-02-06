const fixMyType = (obj, keyName, setTo) => {
  if (setTo === 'text') {
    obj[keyName] = String(obj[keyName]);
  } else if (setTo === 'number') {
    obj[keyName] = parseInt(obj[keyName]);
  }

  return obj;
};

const fixPropertyType = async ({ input, keyName, setTo }) => {
  let as;
  if (Array.isArray(input)) {
    as = new Array();
    input.forEach((element) => {
      as.push(fixMyType(element, keyName, setTo));
    });
  } else {
    as = fixMyType(input, keyName, setTo);
  }

  return {
    as,
  };
};

export default fixPropertyType;
