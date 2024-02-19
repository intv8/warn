/**
 * This file contains test cases, mocks, or other data for testing the
 * global warnings feature.
 *
 * For use in ../warnings.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import {
  ConnectionWarning,
  DiskWarning,
  MemoryWarning,
  ProcessWarning,
  WarningCollector,
  warnings,
} from '../../mod.ts';

export function fixture(): void {
  warnings.events.addEventHandler(
    'add',
    (warning) => console.log('Warning:', warning.message),
  );
  warnings.warn(new ConnectionWarning('A connection is slow.'));
  warnings.warn(new ConnectionWarning('A connection is lossy.'));
  warnings.warn(new ConnectionWarning('A connection is latent.'));
  warnings.warn(new ConnectionWarning('A connection is jittery.'));
  warnings.warn('A connection is dropping packets.', ConnectionWarning);
  warnings.warn('A connection is dropping packets.', ConnectionWarning);
  warnings.warn('A connection is dropping packets.', ConnectionWarning);

  warnings.setCollector(new WarningCollector());

  warnings.events.addEventHandler(
    'add',
    (warning) => console.warn('Warning:', warning.message),
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
