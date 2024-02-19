/**
 * This file exports the WarningCollector class.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Warning } from './exceptions/warning.ts';

/** The events that can be emitted by a {@link WarningCollector}. */
export interface IWarningCollectorEvents {
  /** Emitted when a warning is added to the collector. */
  add: ((warning: Warning) => void)[];

  /** Emitted when warnings are read from the collector. */
  read: ((warnings: Warning[]) => void)[];

  /** Emitted when warnings are cleared from the collector. */
  clear: (() => void)[];
}

/** A class that collects warnings and displays collected warnings. */
export class WarningCollector {
  /** The warnings collected by this {@link WarningCollector}. */
  protected warnings: Warning[] = [];

  /** The events emitted by this {@link WarningCollector}. */
  protected events: IWarningCollectorEvents = {
    add: [],
    read: [],
    clear: [],
  };

  /** Creates a new {@link WarningCollector}.*/
  constructor() {}

  /** The number of warnings in the {@link WarningCollector}. */
  public get count(): number {
    return this.warnings.length;
  }

  /** Adds a warning to the {@link WarningCollector}. */
  public add(warning: Warning): void {
    const { warnings } = this;

    warnings.push(warning);
    this.emitAdd(warning);
  }

  /** Migrate collected warnings to a new {@link WarningCollector}. Does not re-log warnings. */
  public migrateTo(newCollector: WarningCollector): void {
    const { warnings } = this;

    newCollector.warnings = [...warnings];

    this.clear();
  }

  /** Returns warnings in the {@link WarningCollector}. */
  public listWarnings(): Warning[] {
    this.emitRead();

    return [...this.warnings];
  }

  /** Clears warnings from the {@link WarningCollector}. */
  public clear(): void {
    this.warnings = [];

    this.emitClear();
  }

  /** Adds a listener for the `add` event. */
  public onAdd(listener: (warning: Warning) => void): void {
    this.events.add.push(listener);
  }

  /** Adds a listener for the `read` event. */
  public onRead(listener: (warnings: Warning[]) => void): void {
    this.events.read.push(listener);
  }

  /** Adds a listener for the `clear` event. */
  public onClear(listener: () => void): void {
    this.events.clear.push(listener);
  }

  /** Emits the `read` event. */
  protected emitRead(): void {
    for (const listener of this.events.read) {
      listener([...this.warnings]);
    }
  }

  /** Emits the `add` event. */
  protected emitAdd(warning: Warning): void {
    for (const listener of this.events.add) {
      listener(warning);
    }
  }

  /** Emits the `clear` event. */
  protected emitClear(): void {
    for (const listener of this.events.clear) {
      listener();
    }
  }
}
