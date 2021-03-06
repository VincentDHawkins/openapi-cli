#!/usr/bin/env node
import { validateFromFile } from './validate';
import cli from './cli';

export { validate, validateFromFile } from './validate';
export { bundle, bundleToFile } from './bundle';

export default validateFromFile;

if (require.main === module) {
  cli();
}
