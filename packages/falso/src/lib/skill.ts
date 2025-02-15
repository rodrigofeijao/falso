import { FakeOptions, fake } from './core/core';
import { data } from './skill.json';

/**
 * Generate a random skill.
 *
 * @category Person
 *
 * @example
 *
 * randSkill()
 *
 * @example
 *
 * randSkill({ length: 10 })
 *
 */
export function randSkill<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
