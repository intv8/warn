/**
 * This file exports exceptions used by the the partic11e warn package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export warning ConnectionWarning and related features.
export {
  ConnectionWarning,
  type ConnectionWarningInit,
} from './connection_warning.ts';

//  Export warning DeprecationWarning and related features.
export {
  DeprecationWarning,
  type DeprecationWarningInit,
} from './deprecation_warning.ts';

//  Export warning DiskWarning and related features.
export { DiskWarning, type DiskWarningInit } from './disk_warning.ts';

//  Export warning FutureWarning and related features.
export { FutureWarning, type FutureWarningInit } from './future_warning.ts';

//  Export warning MemoryWarning and related features.
export { MemoryWarning, type MemoryWarningInit } from './memory_warning.ts';

//  Export warning OSWarning and related features.
export { OSWarning, type OSWarningInit } from './os_warning.ts';

//  Export warning PendingDeprecationWarning and related features.
export {
  PendingDeprecationWarning,
  type PendingDeprecationWarningInit,
} from './pending_deprecation_warning.ts';

//  Export warning ProcessWarning and related features.
export { ProcessWarning, type ProcessWarningInit } from './process_warning.ts';

//  Export warning StabilityWarning and related features.
export {
  StabilityWarning,
  type StabilityWarningInit,
} from './stability_warning.ts';

//  Export warning Warning and related features.
export { Warning, type WarningInit } from './warning.ts';
