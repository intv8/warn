/**
 * This file exports the FutureWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { Warning } from './warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link FutureWarning} warning. */
export type FutureWarningInit = BaseExceptionInit;

/** A warning alerting to future changes for a codebase. */
export class FutureWarning<T extends FutureWarningInit = FutureWarningInit>
  extends Warning<T> {
  /** Creates a new {@link FutureWarning} warning with the provided message, optionally with additional {@link FutureWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link FutureWarning} warning. */
  public code = 0x48;
}
