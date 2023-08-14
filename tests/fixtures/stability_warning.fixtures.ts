/**
 * This file contains test cases, mocks, or other data for testing the
 * StabilityWarning feature.
 *
 * For use in ../stability_warning.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['', {
    name: 'StabilityWarning',
    message:
      'A feature is unstable and should not be used in production environments.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: A feature is unstable and should not be used in production environments.',
    asValue: 73,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=A%20feature%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.`,
  }],
  ['This feature is not ready for production.', {
    name: 'StabilityWarning',
    message: 'This feature is not ready for production.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: This feature is not ready for production.',
    asValue: 73,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=This%20feature%20is%20not%20ready%20for%20production.`,
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
    name: 'StabilityWarning',
    message:
      'A feature is unstable and should not be used in production environments.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: A feature is unstable and should not be used in production environments.',
    asValue: 73,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=A%20feature%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.`,
  }],
  [init1, {
    name: 'StabilityWarning',
    message:
      'A function is unstable and should not be used in production environments.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: A function is unstable and should not be used in production environments.',
    asValue: 73,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=A%20function%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'StabilityWarning',
    message:
      'The feature "example" is unstable and should not be used in production environments.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: The feature "example" is unstable and should not be used in production environments.',
    asValue: 73,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=The%20feature%20%22example%22%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'StabilityWarning',
    message:
      'A feature is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: A feature is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 73,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=A%20feature%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'StabilityWarning',
    message:
      'The function "example" is unstable and should not be used in production environments.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: The function "example" is unstable and should not be used in production environments.',
    asValue: 73,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=The%20function%20%22example%22%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'StabilityWarning',
    message:
      'A function is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: A function is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 73,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=A%20function%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'StabilityWarning',
    message:
      'The feature "example" is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: The feature "example" is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 73,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=The%20feature%20%22example%22%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'StabilityWarning',
    message:
      'The function "example" is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    code: 73,
    asString:
      'StabilityWarning [0x49]: The function "example" is unstable and should not be used in production environments. Read more at https://cl.docs.i11n.org/p11/test/example.',
    asValue: 73,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=The%20function%20%22example%22%20is%20unstable%20and%20should%20not%20be%20used%20in%20production%20environments.%20Read%20more%20at%20https%3A%2F%2Fcl.docs.i11n.org%2Fp11%2Ftest%2Fexample.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('This feature is unstable.');

export const messageCauseFixtures = [
  ['This feature is unstable.', cause0, {
    name: 'StabilityWarning',
    message: 'This feature is unstable.',
    code: 73,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=This%20feature%20is%20unstable.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['This feature is unstable.', init7, {
    name: 'StabilityWarning',
    message: 'This feature is unstable.',
    code: 73,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=This%20feature%20is%20unstable.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['This feature is unstable.', { ...init7, cause: cause0 }, {
    name: 'StabilityWarning',
    message: 'This feature is unstable.',
    code: 73,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x49?message=This%20feature%20is%20unstable.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
