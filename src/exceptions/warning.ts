/**
 * This file exports the Warning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { type BaseExceptionInit, Exception } from '../../deps.ts';

/** The warning init properties for the {@link Warning} warning. */
export type WarningInit = BaseExceptionInit;

/** A generic warning from which all warnings are derived. */
export class Warning<T extends WarningInit = WarningInit> extends Exception<T> {
  /** Creates a new {@link Warning} warning with the provided message, optionally with additional {@link Warning} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The warning code for the {@link Warning} warning. */
  public code = 0x40;
}
