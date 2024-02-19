/**
 * This file exports the WarningsManager global singleton instance.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Warning } from './exceptions/warning.ts';
import { WarningCollector } from './warning_collector.ts';

import { type Constructor, EventEmitter, EventManager } from '../deps.ts';

export type WarningsManagerEvents = {
  add: (warning: Warning) => void;
};

/** A class interfacing with a {@link WarningCollector} to add and view warnings. */
class WarningsManager {
  /** Creates a new {@link WarningsManager} with the provided {@link WarningCollector}. */
  constructor(protected collector: WarningCollector) {
    this.emitter = this.events.getEventEmitter();
  }

  /** The event emitter for this {@link WarningsManager}. */
  protected emitter: EventEmitter<WarningsManagerEvents>;

  /** The events manager for this {@link WarningsManager}. */
  public readonly events = new EventManager<WarningsManagerEvents>();

  /** Sets the {@link WarningCollector} to use for this {@link WarningsManager}. */
  public setCollector(newCollector: WarningCollector): void {
    const { collector, emitter } = this;
    const warnings = collector.listWarnings();

    collector.migrateTo(newCollector);

    if (warnings.length > 0) {
      const warning = new Warning(
        `${warnings.length} warnings were transferred to a new collector.`,
      );

      newCollector.add(warning);
      emitter.emit('add', warning);
    }

    this.collector = newCollector;
  }

  /** Adds a `type` warning with the `message` to the {@link WarningCollector}. */
  public warn(message: string, type: Constructor<Warning>): void;
  /** Adds a `warning` to the {@link WarningCollector}. */
  public warn(warning: Warning): void;
  public warn(
    messageOrWarning: string | Warning,
    type?: Constructor<Warning>,
  ): void {
    const { collector, emitter } = this;
    if (typeof messageOrWarning === 'string') {
      if (type) {
        const warning = new type(messageOrWarning);

        collector.add(warning);
        emitter.emit('add', warning);
      }
    } else {
      collector.add(messageOrWarning);
      emitter.emit('add', messageOrWarning);
    }
  }

  /** Returns warnings in the {@link WarningCollector}, optionally only those containing the substring `msg`. */
  public getWarnings(msg?: string): Warning[];
  /** Returns warnings in the {@link WarningCollector}, optionally only those of the type `type`. */
  public getWarnings(type?: Constructor<Warning>): Warning[];
  public getWarnings(msgOrType?: string | Constructor<Warning>): Warning[] {
    const { collector } = this;
    const warnings = collector.listWarnings();

    if (typeof msgOrType === 'string') {
      return warnings.filter((warning) => warning.message.includes(msgOrType));
    } else if (msgOrType) {
      return warnings.filter((warning) => warning instanceof msgOrType);
    } else {
      return warnings;
    }
  }

  /** Returns warnings in the {@link WarningCollector} grouped by their type. */
  public groupWarnings(): Record<string, Warning[]> {
    const warnings = this.getWarnings();
    const groups: Record<string, Warning[]> = {};

    for (const warning of warnings) {
      if (!groups[warning.constructor.name]) {
        groups[warning.constructor.name] = [];
      }

      groups[warning.constructor.name].push(warning);
    }

    return groups;
  }
}

/** The global {@link WarningsManager} instance. */
export const warnings = new WarningsManager(
  new WarningCollector(),
);
