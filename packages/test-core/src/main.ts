
import { test_base } from 'test-base';

import { something } from '@core/internal/something';

/* ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... */
console.log("** test-core");

export function test_core() {
  console.log("++ test-core");
  
  test_base();
  something();

  return 2;
}