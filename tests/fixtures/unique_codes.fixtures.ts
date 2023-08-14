/**
 * This file contains test cases for testing that exception and warning codes are unique.
 *
 * For use in ../unique_codes.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import {
  ConnectionWarning,
  DeprecationWarning,
  DiskWarning,
  FutureWarning,
  MemoryWarning,
  OSWarning,
  PendingDeprecationWarning,
  ProcessWarning,
  StabilityWarning,
} from '../../mod.ts';

import { allCodesFixture as others } from '../../dev_deps.ts';

const allInstances = [
  new ConnectionWarning('Test message'),
  new DeprecationWarning('Test message'),
  new DiskWarning('Test message'),
  new FutureWarning('Test message'),
  new MemoryWarning('Test message'),
  new OSWarning('Test message'),
  new ProcessWarning('Test message'),
  new PendingDeprecationWarning('Test message'),
  new StabilityWarning('Test message'),
];

export const allCodesFixture = [
  ...others,
  ...allInstances.map((instance) => instance.code),
];
