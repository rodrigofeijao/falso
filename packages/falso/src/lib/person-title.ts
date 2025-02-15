import { FakeOptions, fake } from './core/core';
import { data } from './person-title.json';

/**
 * Generate a random person title.
 *
 * @category person
 *
 * @example
 *
 * randPersonTitle()
 *
 * @example
 *
 * randPersonTitle({ length: 10 })
 *
 */
export function randPersonTitle<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
