/* eslint-disable import/no-cycle */
import OpenAPISchema from './OpenAPISchema';

const OpenAPISchemaMap = {
  name: 'OpenAPISchemaMap',
  isIdempotent: true,
  properties(node) {
    const props = {};
    Object.keys(node).forEach((k) => {
      props[k] = OpenAPISchema;
    });
    return props;
  },
};

export default OpenAPISchemaMap;
