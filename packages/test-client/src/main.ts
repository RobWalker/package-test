
import { test_core } from 'test-core';
import { something  } from '@core/internal/something';

import { base_function  } from '@base/base_function';

/* ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... */
export function test_client() {
  test_core();

  console.log("hello world: test_client");
  something();
  base_function();

  return 1;
}

console.log("** test-client");
test_client();
