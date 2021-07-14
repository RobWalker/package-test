import { test_client } from '../main';

describe('Example Test', () => {
  it('proves that the build pipeline is setup OK', () => {
   expect(test_client()).toEqual(1);
  })
})