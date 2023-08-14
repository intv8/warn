/**
 * This file exports the DiskWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSWarning } from './os_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link DiskWarning} warning. */
export type DiskWarningInit = BaseExceptionInit;

/** An warning alerting when an operation is expected to encounter disk issues. */
export class DiskWarning<T extends DiskWarningInit = DiskWarningInit>
  extends OSWarning<T> {
  /** Creates a new {@link DiskWarning} warning with the provided message, optionally with additional {@link DiskWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link DiskWarning} warning. */
  public code = 0x43;
}
