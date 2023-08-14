/**
 * This file exports the DeprecationWarning warning and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { FutureWarning } from './future_warning.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../../deps.ts';

/** The default message for the {@link DeprecationWarning} exception. */
const DEFAULT_MESSAGE = 'A feature has been deprecated.';

/** The warning init properties for the {@link DeprecationWarning} warning. */
export type DeprecationWarningInit = BaseExceptionInit<{
  /** The type of feature that is deprecated. */
  featureType?: string;

  /** The name of the feature that is deprecated. */
  featureName?: string;

  /** The name of the feature that is an alternative to the deprecated feature. */
  alternativeFeatureName?: string;

  /** A URL pointing to a resource covering the deprecation of the feature. */
  aboutUrl?: string;
}>;

/** Creates a message from the provided {@link DeprecationWarningInit} properties. */
function createMsgFromInit(init: DeprecationWarningInit): string {
  const { featureType, featureName, alternativeFeatureName, aboutUrl } = init;
  const conj = featureType && 'aeiou'.includes(featureType[0].toLowerCase())
    ? 'An'
    : 'A';

  switch (true) {
    case (!!featureType && !!featureName && !!alternativeFeatureName &&
      !!aboutUrl):
      return `The ${featureType} "${featureName}" has been deprecated. Instead, use "${alternativeFeatureName}". Read more at ${aboutUrl}.`;
    case (!!featureName && !!alternativeFeatureName && !!aboutUrl):
      return `The feature "${featureName}" has been deprecated. Instead, use "${alternativeFeatureName}". Read more at ${aboutUrl}.`;
    case (!!featureType && !!alternativeFeatureName && !!aboutUrl):
      return `${conj} ${featureType} has been deprecated. Instead, use "${alternativeFeatureName}". Read more at ${aboutUrl}.`;
    case (!!featureType && !!featureName && !!aboutUrl):
      return `The ${featureType} "${featureName}" has been deprecated. Read more at ${aboutUrl}.`;
    case (!!featureType && !!featureName && !!alternativeFeatureName):
      return `The ${featureType} "${featureName}" has been deprecated. Instead, use "${alternativeFeatureName}".`;
    case (!!alternativeFeatureName && !!aboutUrl):
      return `A feature has been deprecated. Instead, use "${alternativeFeatureName}". Read more at ${aboutUrl}.`;
    case (!!featureName && !!aboutUrl):
      return `The feature "${featureName}" has been deprecated. Read more at ${aboutUrl}.`;
    case (!!featureName && !!alternativeFeatureName):
      return `The feature "${featureName}" has been deprecated. Instead, use "${alternativeFeatureName}".`;
    case (!!featureType && !!aboutUrl):
      return `${conj} ${featureType} has been deprecated. Read more at ${aboutUrl}.`;
    case (!!featureType && !!alternativeFeatureName):
      return `${conj} ${featureType} has been deprecated. Instead, use "${alternativeFeatureName}".`;
    case (!!featureType && !!featureName):
      return `The ${featureType} "${featureName}" has been deprecated.`;
    case (!!aboutUrl):
      return `A feature has been deprecated. Read more at ${aboutUrl}.`;
    case (!!alternativeFeatureName):
      return `A feature has been deprecated. Instead, use "${alternativeFeatureName}".`;
    case (!!featureName):
      return `The feature "${featureName}" has been deprecated.`;
    case (!!featureType):
      return `${conj} ${featureType} has been deprecated.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** A warning alerting that a feature is pending deprecation. */
export class DeprecationWarning<
  T extends DeprecationWarningInit = DeprecationWarningInit,
> extends FutureWarning<T> {
  /** Creates a new {@link DeprecationWarning} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link DeprecationWarning} exception with a message created from the provided {@link DeprecationWarningInit} properties. */
  constructor(init: T);

  /** Creates a new {@link DeprecationWarning} exception with the provided message, optionally with additional {@link DeprecationWarningInit} properties. */
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

  /** The warning code for the {@link DeprecationWarning} warning. */
  public code = 0x4b;
}
