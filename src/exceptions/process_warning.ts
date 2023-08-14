/**
 * This file exports the ProcessWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSWarning } from './os_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link ProcessWarning} warning. */
export type ProcessWarningInit = BaseExceptionInit;

/** A warning alerting that a process may encounter issues. e.g. a dependency is not started and may cause issues, but will not prevent the process from starting. */
export class ProcessWarning<T extends ProcessWarningInit = ProcessWarningInit>
  extends OSWarning<T> {
  /** Creates a new {@link ProcessWarning} warning with the provided message, optionally with additional {@link ProcessWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link ProcessWarning} warning. */
  public code = 0x44;
}
