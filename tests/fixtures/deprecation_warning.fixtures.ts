/**
 * This file contains test cases, mocks, or other data for testing the
 * DeprecationWarning feature.
 *
 * For use in ../deprecation_warning.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export const messageFixtures = [
  ['', {
    name: 'DeprecationWarning',
    message: 'A feature has been deprecated.',
    code: 75,
    asString: 'DeprecationWarning [0x4b]: A feature has been deprecated.',
    asValue: 75,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4b?message=A%20feature%20has%20been%20deprecated.`,
  }],
  ['This feature will be removed.', {
    name: 'DeprecationWarning',
    message: 'This feature will be removed.',
    code: 75,
    asString: 'DeprecationWarning [0x4b]: This feature will be removed.',
    asValue: 75,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4b?message=This%20feature%20will%20be%20removed.`,
  }],
] as const;

const init1 = { featureType: 'function' } as const;
const init2 = { featureName: 'example' } as const;
const init3 = { alternativeFeatureName: 'test' } as const;
const init4 = {
  aboutUrl: 'https://cl.docs.i11n.org/p11/test/example',
} as const;
const init5 = { ...init1, ...init2 } as const;
const init6 = { ...init1, ...init3 } as const;
const init7 = { ...init1, ...init4 } as const;
const init8 = { ...init2, ...init3 } as const;
const init9 = { ...init2, ...init4 } as const;
const init10 = { ...init3, ...init4 } as const;
const init11 = { ...init1, ...init2, ...init3 } as const;
const init12 = { ...init1, ...init2, ...init4 } as const;
const init13 = { ...init1, ...init3, ...init4 } as const;
const init14 = { ...init2, ...init3, ...init4 } as const;
const init15 = { ...init1, ...init2, ...init3, ...init4 } as const;
export const initFixtures = [
  [{}, {
    name: 'DeprecationWarning',
    message: 'A feature has been deprecated.',
    code: 75,
    asString: 'DeprecationWarning [0x4b]: A feature has been deprecated.',
    asValue: 75,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x4b?message=A%20feature%20has%20been%20deprecated.`,
  }],
  [init1, {
    name: 'DeprecationWarning',
    message: 'A function has been deprecated.',
    code: 75,
    asString: 'DeprecationWarning [0x4b]: A function has been deprecated.',
    asValue: 75,
    cause: undefined,
    data: init1,
    helpUrl: `/0x4b?message=A%20function%20has%20been%20deprecated.&data=${
      encodeURIComponent(JSON.stringify(init1))
    }`,
  }],
  [init2, {
    name: 'DeprecationWarning',
    message: 'The feature "example" has been deprecated.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The feature "example" has been deprecated.',
    asValue: 75,
    cause: undefined,
    data: init2,
    helpUrl:
      `/0x4b?message=The%20feature%20%22example%22%20has%20been%20deprecated.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'DeprecationWarning',
    message: 'A feature has been deprecated. Instead, use "test".',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A feature has been deprecated. Instead, use "test".',
    asValue: 75,
    cause: undefined,
    data: init3,
    helpUrl:
      `/0x4b?message=A%20feature%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'DeprecationWarning',
    message:
      'A feature has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A feature has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init4,
    helpUrl:
      `/0x4b?message=A%20feature%20has%20been%20deprecated.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'DeprecationWarning',
    message: 'The function "example" has been deprecated.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The function "example" has been deprecated.',
    asValue: 75,
    cause: undefined,
    data: init5,
    helpUrl:
      `/0x4b?message=The%20function%20%22example%22%20has%20been%20deprecated.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'DeprecationWarning',
    message: 'A function has been deprecated. Instead, use "test".',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A function has been deprecated. Instead, use "test".',
    asValue: 75,
    cause: undefined,
    data: init6,
    helpUrl:
      `/0x4b?message=A%20function%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'DeprecationWarning',
    message:
      'A function has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A function has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init7,
    helpUrl:
      `/0x4b?message=A%20function%20has%20been%20deprecated.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
  [init8, {
    name: 'DeprecationWarning',
    message: 'The feature "example" has been deprecated. Instead, use "test".',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The feature "example" has been deprecated. Instead, use "test".',
    asValue: 75,
    cause: undefined,
    data: init8,
    helpUrl:
      `/0x4b?message=The%20feature%20%22example%22%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.&data=${
        encodeURIComponent(JSON.stringify(init8))
      }`,
  }],
  [init9, {
    name: 'DeprecationWarning',
    message:
      'The feature "example" has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The feature "example" has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init9,
    helpUrl:
      `/0x4b?message=The%20feature%20%22example%22%20has%20been%20deprecated.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init9))
      }`,
  }],
  [init10, {
    name: 'DeprecationWarning',
    message:
      'A feature has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A feature has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init10,
    helpUrl:
      `/0x4b?message=A%20feature%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init10))
      }`,
  }],
  [init11, {
    name: 'DeprecationWarning',
    message: 'The function "example" has been deprecated. Instead, use "test".',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The function "example" has been deprecated. Instead, use "test".',
    asValue: 75,
    cause: undefined,
    data: init11,
    helpUrl:
      `/0x4b?message=The%20function%20%22example%22%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.&data=${
        encodeURIComponent(JSON.stringify(init11))
      }`,
  }],
  [init12, {
    name: 'DeprecationWarning',
    message:
      'The function "example" has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The function "example" has been deprecated. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init12,
    helpUrl:
      `/0x4b?message=The%20function%20%22example%22%20has%20been%20deprecated.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init12))
      }`,
  }],
  [init13, {
    name: 'DeprecationWarning',
    message:
      'A function has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: A function has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init13,
    helpUrl:
      `/0x4b?message=A%20function%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init13))
      }`,
  }],
  [init14, {
    name: 'DeprecationWarning',
    message:
      'The feature "example" has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The feature "example" has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init14,
    helpUrl:
      `/0x4b?message=The%20feature%20%22example%22%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init14))
      }`,
  }],
  [init15, {
    name: 'DeprecationWarning',
    message:
      'The function "example" has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 75,
    asString:
      'DeprecationWarning [0x4b]: The function "example" has been deprecated. Instead, use "test". Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 75,
    cause: undefined,
    data: init15,
    helpUrl:
      `/0x4b?message=The%20function%20%22example%22%20has%20been%20deprecated.%20Instead%2C%20use%20%22test%22.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }`,
  }],
] as const;

const cause0 = new Error('This feature is deprecated.');

export const messageCauseFixtures = [
  ['This feature is deprecated.', cause0, {
    name: 'DeprecationWarning',
    message: 'This feature is deprecated.',
    code: 75,
    cause: cause0,
    data: undefined,
    helpUrl: `/0x4b?message=This%20feature%20is%20deprecated.&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;

export const messageDataFixtures = [
  ['This feature is deprecated.', init15, {
    name: 'DeprecationWarning',
    message: 'This feature is deprecated.',
    code: 75,
    cause: undefined,
    data: init15,
    helpUrl: `/0x4b?message=This%20feature%20is%20deprecated.&data=${
      encodeURIComponent(JSON.stringify(init15))
    }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['This feature is deprecated.', { ...init15, cause: cause0 }, {
    name: 'DeprecationWarning',
    message: 'This feature is deprecated.',
    code: 75,
    cause: cause0,
    data: init15,
    helpUrl: `/0x4b?message=This%20feature%20is%20deprecated.&data=${
      encodeURIComponent(JSON.stringify(init15))
    }&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;
