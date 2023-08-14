/**
 * This file exports the public API features of the partic11e warn package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export public exceptions
export * from './exceptions/mod.ts';

//  Export version
export { VERSION } from './version.ts';

//  Export warning collector
export { WarningCollector } from './warning_collector.ts';

//  Export warnings
export { warnings } from './warnings.ts';
