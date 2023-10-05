/**
 * This file exports exceptions used by the the intv8 warn package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export {
  ConnectionWarning,
  type ConnectionWarningInit,
} from './connection_warning.ts';

export {
  DeprecationWarning,
  type DeprecationWarningInit,
} from './deprecation_warning.ts';

export { DiskWarning, type DiskWarningInit } from './disk_warning.ts';

export { FutureWarning, type FutureWarningInit } from './future_warning.ts';

export { MemoryWarning, type MemoryWarningInit } from './memory_warning.ts';

export { OSWarning, type OSWarningInit } from './os_warning.ts';

export {
  PendingDeprecationWarning,
  type PendingDeprecationWarningInit,
} from './pending_deprecation_warning.ts';

export { ProcessWarning, type ProcessWarningInit } from './process_warning.ts';

export {
  StabilityWarning,
  type StabilityWarningInit,
} from './stability_warning.ts';

export { Warning, type WarningInit } from './warning.ts';
