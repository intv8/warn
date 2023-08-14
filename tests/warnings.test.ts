/**
 * This file contains tests for the global warnings feature.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import {
  assertEquals,
  assertSpyCalls,
  describe,
  it,
  spy,
} from '../dev_deps.ts';

import { DiskWarning, warnings } from '../mod.ts';

import { fixture } from './fixtures/warnings.fixtures.ts';

describe('DeprecationWarning', () => {
  const consoleWarnSpy = spy(console, 'warn');
  const consoleLogSpy = spy(console, 'log');

  it('should report expected warnings', () => {
    fixture();

    const allWarnings = warnings.getWarnings();
    const filteredStringWarnings = warnings.getWarnings('A connection is dr');
    const filteredTypeWarnings = warnings.getWarnings(DiskWarning);
    const groupedWarnings = warnings.groupWarnings();
    const groupKeys = Object.keys(groupedWarnings);

    assertSpyCalls(consoleWarnSpy, 7);
    assertSpyCalls(consoleLogSpy, 9);

    assertEquals(allWarnings.length, 16);
    assertEquals(groupKeys.length, 5);
    assertEquals(groupedWarnings.ConnectionWarning.length, 7);
    assertEquals(groupedWarnings.Warning.length, 1);
    assertEquals(groupedWarnings.MemoryWarning.length, 1);
    assertEquals(groupedWarnings.ProcessWarning.length, 2);
    assertEquals(groupedWarnings.DiskWarning.length, 5);
    assertEquals(filteredStringWarnings.length, 3);
    assertEquals(filteredTypeWarnings.length, 5);
  });
});
