import { base_function } from '@base/base_function';

import { test_core } from '../main';

describe('Example Test', () => {
  it('core', () => {
   expect(test_core()).toEqual(2);
  });

  it('base', () => {
    expect(base_function()).toEqual(999);
   });
 
})