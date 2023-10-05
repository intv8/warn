/**
 * This file exports the PendingDeprecationWarning warning and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

//  Import base exception
import { FutureWarning } from './future_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The default message for the {@link PendingDeprecationWarning} exception. */
const DEFAULT_MESSAGE = 'A feature is pending deprecation.';

/** The warning init properties for the {@link PendingDeprecationWarning} warning. */
export type PendingDeprecationWarningInit = BaseExceptionInit<{
  /** The type of feature that is pending deprecation. */
  featureType?: string;

  /** The name of the feature that is pending deprecation. */
  featureName?: string;

  /** A URL pointing to a resource covering the pending deprecation of the feature. */
  aboutUrl?: string;
}>;

/** Creates a message from the provided {@link PendingDeprecationWarningInit} properties. */
function createMsgFromInit(init: PendingDeprecationWarningInit): string {
  const { featureType, featureName, aboutUrl } = init;
  const conj = featureType && 'aeiou'.includes(featureType[0].toLowerCase())
    ? 'An'
    : 'A';

  switch (true) {
    case (!!featureType && !!featureName && !!aboutUrl):
      return `The ${featureType} "${featureName}" is pending deprecation. Read more at ${aboutUrl}.`;
    case (!!featureName && !!aboutUrl):
      return `The feature "${featureName}" is pending deprecation. Read more at ${aboutUrl}.`;
    case (!!featureType && !!aboutUrl):
      return `${conj} ${featureType} is pending deprecation. Read more at ${aboutUrl}.`;
    case (!!featureType && !!featureName):
      return `The ${featureType} "${featureName}" is pending deprecation.`;
    case (!!aboutUrl):
      return `A feature is pending deprecation. Read more at ${aboutUrl}.`;
    case (!!featureName):
      return `The feature "${featureName}" is pending deprecation.`;
    case (!!featureType):
      return `${conj} ${featureType} is pending deprecation.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** A warning alerting that a feature is pending deprecation. */
export class PendingDeprecationWarning<
  T extends PendingDeprecationWarningInit = PendingDeprecationWarningInit,
> extends FutureWarning<T> {
  /** Creates a new {@link PendingDeprecationWarning} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link PendingDeprecationWarning} exception with a message created from the provided {@link PendingDeprecationWarningInit} properties. */
  constructor(init: T);

  /** Creates a new {@link PendingDeprecationWarning} exception with the provided message, optionally with additional {@link PendingDeprecationWarningInit} properties. */
  constructor(message: string, init?: T);

  //  Constructor overload implementation
  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The warning code for the {@link PendingDeprecationWarning} warning. */
  public code = 0x4a;
}
