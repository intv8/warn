/**
 * This file contains test cases, mocks, or other data for testing the
 * ConnectionWarning feature.
 *
 * For use in ../connection_warning.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['A connection is lossy.', {
    name: 'ConnectionWarning',
    message: 'A connection is lossy.',
    code: 69,
    asString: 'ConnectionWarning [0x45]: A connection is lossy.',
    asValue: 69,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x45?message=A%20connection%20is%20lossy.`,
  }],
] as const;

const cause0 = new Error('A connection is lossy.');

export const messageCauseFixtures = [
  ['A connection is lossy.', cause0, {
    name: 'ConnectionWarning',
    message: 'A connection is lossy.',
    code: 69,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x45?message=A%20connection%20is%20lossy.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['A connection is lossy.', data, {
    name: 'ConnectionWarning',
    message: 'A connection is lossy.',
    code: 69,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x45?message=A%20connection%20is%20lossy.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['A connection is lossy.', { ...data, cause: cause0 }, {
    name: 'ConnectionWarning',
    message: 'A connection is lossy.',
    code: 69,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x45?message=A%20connection%20is%20lossy.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
