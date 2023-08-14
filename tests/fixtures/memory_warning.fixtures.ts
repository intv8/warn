/**
 * This file contains test cases, mocks, or other data for testing the
 * MemoryWarning feature.
 *
 * For use in ../memory_warning.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['Memory low.', {
    name: 'MemoryWarning',
    message: 'Memory low.',
    code: 66,
    asString: 'MemoryWarning [0x42]: Memory low.',
    asValue: 66,
    cause: undefined,
    data: undefined,
    helpUrl: `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x42?message=Memory%20low.`,
  }],
] as const;

const cause0 = new Error('Memory low.');

export const messageCauseFixtures = [
  ['Memory low.', cause0, {
    name: 'MemoryWarning',
    message: 'Memory low.',
    code: 66,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x42?message=Memory%20low.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Memory low.', data, {
    name: 'MemoryWarning',
    message: 'Memory low.',
    code: 66,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x42?message=Memory%20low.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Memory low.', { ...data, cause: cause0 }, {
    name: 'MemoryWarning',
    message: 'Memory low.',
    code: 66,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x42?message=Memory%20low.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;