/**
 * This file exports the StabilityWarning warning and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

//  Import base exception
import { FutureWarning } from './future_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The default message for the {@link StabilityWarning} exception. */
const DEFAULT_MESSAGE =
  'A feature is unstable and should not be used in production environments.';

/** The warning init properties for the {@link StabilityWarning} warning. */
export type StabilityWarningInit = BaseExceptionInit<{
  /** The type of feature that is unstable. */
  featureType?: string;

  /** The name of the feature that is unstable. */
  featureName?: string;

  /** A URL pointing to a resource covering the unstable feature. */
  aboutUrl?: string;
}>;

/** Creates a message from the provided {@link StabilityWarningInit} properties. */
function createMsgFromInit(init: StabilityWarningInit): string {
  const { featureType, featureName, aboutUrl } = init;
  const conj = featureType && 'aeiou'.includes(featureType[0].toLowerCase())
    ? 'An'
    : 'A';

  switch (true) {
    case (!!featureType && !!featureName && !!aboutUrl):
      return `The ${featureType} "${featureName}" is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case (!!featureName && !!aboutUrl):
      return `The feature "${featureName}" is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case (!!featureType && !!aboutUrl):
      return `${conj} ${featureType} is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case (!!featureType && !!featureName):
      return `The ${featureType} "${featureName}" is unstable and should not be used in production environments.`;
    case (!!aboutUrl):
      return `A feature is unstable and should not be used in production environments. Read more at ${aboutUrl}.`;
    case (!!featureName):
      return `The feature "${featureName}" is unstable and should not be used in production environments.`;
    case (!!featureType):
      return `${conj} ${featureType} is unstable and should not be used in production environments.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** A warning alerting that a feature is not stable, or has an indeterminant API, and should not be used in production. */
export class StabilityWarning<
  T extends StabilityWarningInit = StabilityWarningInit,
> extends FutureWarning<T> {
  /** Creates a new {@link StabilityWarning} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link StabilityWarning} exception with a message created from the provided {@link StabilityWarningInit} properties. */
  constructor(init: T);

  /** Creates a new {@link StabilityWarning} exception with the provided message, optionally with additional {@link StabilityWarningInit} properties. */
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

  /** The warning code for the {@link StabilityWarning} warning. */
  public code = 0x49;
}
