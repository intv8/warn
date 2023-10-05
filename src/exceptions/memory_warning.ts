/**
 * This file exports the MemoryWarning warning and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

//  Import base exception
import { OSWarning } from './os_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link MemoryWarning} warning. */
export type MemoryWarningInit = BaseExceptionInit;

/** A warning alerting when an operation is expected to encounter memory issues. */
export class MemoryWarning<T extends MemoryWarningInit = MemoryWarningInit>
  extends OSWarning<T> {
  /** Creates a new {@link MemoryWarning} warning with the provided message, optionally with additional {@link MemoryWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link MemoryWarning} warning. */
  public code = 0x42;
}
