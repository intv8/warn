/**
 * This file contains test cases, mocks, or other data for testing the
 * global warnings feature.
 *
 * For use in ../warnings.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import {
  ConnectionWarning,
  DiskWarning,
  MemoryWarning,
  ProcessWarning,
  WarningCollector,
  warnings,
} from '../../mod.ts';
//  count = 16
//  ConnectionWarning count = 7
//  Warning count = 1
//  MemoryWarning count = 1
//  ProcessWarning count = 2
//  DiskWarning count = 5
// console.warn count = 7
// console.log count = 9

export function fixture(): void {
  warnings.warn(new ConnectionWarning('A connection is slow.'));
  warnings.warn(new ConnectionWarning('A connection is lossy.'));
  warnings.warn(new ConnectionWarning('A connection is latent.'));
  warnings.warn(new ConnectionWarning('A connection is jittery.'));
  warnings.warn('A connection is dropping packets.', ConnectionWarning);
  warnings.warn('A connection is dropping packets.', ConnectionWarning);
  warnings.warn('A connection is dropping packets.', ConnectionWarning);

  warnings.setCollector(
    new WarningCollector((message: string) => console.log('Warning:', message)),
  );

  warnings.warn(new MemoryWarning('Memory is exhausted.'));
  warnings.warn(new ProcessWarning('Process is crashing.'));
  warnings.warn(new ProcessWarning('Process crashed.'));
  warnings.warn(new DiskWarning('Disk space is at 20%.'));
  warnings.warn(new DiskWarning('Disk space is at 15%.'));
  warnings.warn(new DiskWarning('Disk space is at 10%.'));
  warnings.warn(new DiskWarning('Disk space is at 5%.'));
  warnings.warn(new DiskWarning('Disk space is at 0%.'));
}