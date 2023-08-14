/**
 * This file exports the ConnectionWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSWarning } from './os_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The warning init properties for the {@link ConnectionWarning} warning. */
export type ConnectionWarningInit = BaseExceptionInit;

/** A warning alerting that an active connection may encounter issues. e.g. link quality, speed, etc. */
export class ConnectionWarning<
  T extends ConnectionWarningInit = ConnectionWarningInit,
> extends OSWarning<T> {
  /** Creates a new {@link ConnectionWarning} warning with the provided message, optionally with additional {@link ConnectionWarningInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link ConnectionWarning} warning. */
  public code = 0x45;
}
