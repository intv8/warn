/**
 * This file exports the WarningCollector class.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Warning } from './exceptions/warning.ts';

/** A class that collects warnings, logs them to a provided logger, and displays collected warnings. */
export class WarningCollector {
  /** The warnings collected by this {@link WarningCollector}. */
  protected warnings: Warning[] = [];

  /** Creates a new {@link WarningCollector} with the provided logger. */
  constructor(protected logger: (message: string) => void) {
    this.logger = logger;
  }

  /** Adds a warning to the {@link WarningCollector}. */
  public add(warning: Warning): void {
    const { warnings, logger } = this;
    warnings.push(warning);
    logger(warning.toString());
  }

  /** Migrate collected warnings to a new {@link WarningCollector}. Does not re-log warnings. */
  public migrateTo(newCollector: WarningCollector): void {
    const { warnings } = this;

    newCollector.warnings = [...warnings];
    this.warnings = [];
  }

  /** Returns warnings in the {@link WarningCollector}. */
  public listWarnings(): Warning[] {
    return [...this.warnings];
  }
}
