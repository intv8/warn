/**
 * This file contains test cases, mocks, or other data for testing the
 * FutureWarning feature.
 *
 * For use in ../future_warning.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['A feature will change in the future.', {
    name: 'FutureWarning',
    message: 'A feature will change in the future.',
    code: 72,
    asString: 'FutureWarning [0x48]: A feature will change in the future.',
    asValue: 72,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x48?message=A%20feature%20will%20change%20in%20the%20future.`,
  }],
] as const;

const cause0 = new Error('A feature will change in the future.');

export const messageCauseFixtures = [
  ['A feature will change in the future.', cause0, {
    name: 'FutureWarning',
    message: 'A feature will change in the future.',
    code: 72,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x48?message=A%20feature%20will%20change%20in%20the%20future.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['A feature will change in the future.', data, {
    name: 'FutureWarning',
    message: 'A feature will change in the future.',
    code: 72,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x48?message=A%20feature%20will%20change%20in%20the%20future.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['A feature will change in the future.', { ...data, cause: cause0 }, {
    name: 'FutureWarning',
    message: 'A feature will change in the future.',
    code: 72,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x48?message=A%20feature%20will%20change%20in%20the%20future.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
