
import { test_base } from 'test-base';

import { something } from '@/src/internal/something';

/* ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... */
console.log("** test-core");

export function test_core() {
  test_base();
  something();

  return "hello world: test_core";

}