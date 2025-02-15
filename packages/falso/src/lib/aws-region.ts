import { fake, FakeOptions } from './core/core';
import { data } from './aws-region.json';

/**
 * Generate a random AWS region.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsRegion()
 *
 * @example
 *
 * randAwsRegion({ length: 10 })
 *
 */
export function randAwsRegion<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
