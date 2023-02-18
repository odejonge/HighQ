import * as builder from 'xmlbuilder';
const jsonToXml = async ({ feedObj }) => {
  return {
    as: builder.create(feedObj, { encoding: 'utf-8' }).end({ pretty: false }),
  };
};

export default jsonToXml;
