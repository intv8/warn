/**
 * This file exports the OSWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { Warning } from './warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link OSWarning} warning. */
export type OSWarningInit = BaseExceptionInit;

/** The base warning for OS-related warnings. */
export class OSWarning<T extends OSWarningInit = OSWarningInit>
  extends Warning<T> {
  /** Creates a new {@link OSWarning} warning with the provided message, optionally with additional {@link OSWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link OSWarning} warning. */
  public code = 0x41;
}
