/**
 * This file contains test cases, mocks, or other data for testing the
 * ProcessWarning feature.
 *
 * For use in ../process_warning.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['Sub-process failed to start.', {
    name: 'ProcessWarning',
    message: 'Sub-process failed to start.',
    code: 68,
    asString: 'ProcessWarning [0x44]: Sub-process failed to start.',
    asValue: 68,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x44?message=Sub-process%20failed%20to%20start.`,
  }],
] as const;

const cause0 = new Error('Sub-process failed to start.');

export const messageCauseFixtures = [
  ['Sub-process failed to start.', cause0, {
    name: 'ProcessWarning',
    message: 'Sub-process failed to start.',
    code: 68,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x44?message=Sub-process%20failed%20to%20start.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 62, qux: true } as const;

export const messageDataFixtures = [
  ['Sub-process failed to start.', data, {
    name: 'ProcessWarning',
    message: 'Sub-process failed to start.',
    code: 68,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x44?message=Sub-process%20failed%20to%20start.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Sub-process failed to start.', { ...data, cause: cause0 }, {
    name: 'ProcessWarning',
    message: 'Sub-process failed to start.',
    code: 68,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x44?message=Sub-process%20failed%20to%20start.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
