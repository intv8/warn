/**
 * This file contains test cases, mocks, or other data for testing the
 * PendingDeprecationWarning feature.
 *
 * For use in ../pending_deprecation_warning.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export const messageFixtures = [
  ['', {
    name: 'PendingDeprecationWarning',
    message: 'A feature is pending deprecation.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: A feature is pending deprecation.',
    asValue: 74,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4a?message=A%20feature%20is%20pending%20deprecation.`,
  }],
  ['This feature will be removed.', {
    name: 'PendingDeprecationWarning',
    message: 'This feature will be removed.',
    code: 74,
    asString: 'PendingDeprecationWarning [0x4a]: This feature will be removed.',
    asValue: 74,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4a?message=This%20feature%20will%20be%20removed.`,
  }],
] as const;

const init1 = { featureType: 'function' } as const;
const init2 = { featureName: 'example' } as const;
const init3 = {
  aboutUrl: 'https://cl.docs.i11n.org/p11/test/example',
} as const;
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'PendingDeprecationWarning',
    message: 'A feature is pending deprecation.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: A feature is pending deprecation.',
    asValue: 74,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4a?message=A%20feature%20is%20pending%20deprecation.`,
  }],
  [init1, {
    name: 'PendingDeprecationWarning',
    message: 'A function is pending deprecation.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: A function is pending deprecation.',
    asValue: 74,
    cause: undefined,
    data: init1,
    helpUrl: `/0x4a?message=A%20function%20is%20pending%20deprecation.&data=${
      encodeURIComponent(JSON.stringify(init1))
    }`,
  }],
  [init2, {
    name: 'PendingDeprecationWarning',
    message: 'The feature "example" is pending deprecation.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: The feature "example" is pending deprecation.',
    asValue: 74,
    cause: undefined,
    data: init2,
    helpUrl:
      `/0x4a?message=The%20feature%20%22example%22%20is%20pending%20deprecation.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'PendingDeprecationWarning',
    message:
      'A feature is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: A feature is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 74,
    cause: undefined,
    data: init3,
    helpUrl:
      `/0x4a?message=A%20feature%20is%20pending%20deprecation.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'PendingDeprecationWarning',
    message: 'The function "example" is pending deprecation.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: The function "example" is pending deprecation.',
    asValue: 74,
    cause: undefined,
    data: init4,
    helpUrl:
      `/0x4a?message=The%20function%20%22example%22%20is%20pending%20deprecation.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'PendingDeprecationWarning',
    message:
      'A function is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: A function is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 74,
    cause: undefined,
    data: init5,
    helpUrl:
      `/0x4a?message=A%20function%20is%20pending%20deprecation.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'PendingDeprecationWarning',
    message:
      'The feature "example" is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: The feature "example" is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 74,
    cause: undefined,
    data: init6,
    helpUrl:
      `/0x4a?message=The%20feature%20%22example%22%20is%20pending%20deprecation.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'PendingDeprecationWarning',
    message:
      'The function "example" is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 74,
    asString:
      'PendingDeprecationWarning [0x4a]: The function "example" is pending deprecation. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 74,
    cause: undefined,
    data: init7,
    helpUrl:
      `/0x4a?message=The%20function%20%22example%22%20is%20pending%20deprecation.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('This feature is unstable.');

export const messageCauseFixtures = [
  ['This feature is unstable.', cause0, {
    name: 'PendingDeprecationWarning',
    message: 'This feature is unstable.',
    code: 74,
    cause: cause0,
    data: undefined,
    helpUrl: `/0x4a?message=This%20feature%20is%20unstable.&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;

export const messageDataFixtures = [
  ['This feature is unstable.', init7, {
    name: 'PendingDeprecationWarning',
    message: 'This feature is unstable.',
    code: 74,
    cause: undefined,
    data: init7,
    helpUrl: `/0x4a?message=This%20feature%20is%20unstable.&data=${
      encodeURIComponent(JSON.stringify(init7))
    }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['This feature is unstable.', { ...init7, cause: cause0 }, {
    name: 'PendingDeprecationWarning',
    message: 'This feature is unstable.',
    code: 74,
    cause: cause0,
    data: init7,
    helpUrl: `/0x4a?message=This%20feature%20is%20unstable.&data=${
      encodeURIComponent(JSON.stringify(init7))
    }&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;
