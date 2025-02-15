import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-model.json';

/**
 * Generate a random vehicle model.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleModel()
 *
 * @example
 *
 * randVehicleModel({ length: 10 })
 *
 */
export function randVehicleModel<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
