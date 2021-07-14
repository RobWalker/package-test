
import { test_core } from 'test-core';

/* ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... */
export function test_client() {
  test_core();

  console.log("hello world: test_client");

  return 1;
}

console.log("** test-client");
test_client();
