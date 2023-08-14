/**
 * This file contains test cases, mocks, or other data for testing the
 * DiskWarning feature.
 *
 * For use in ../disk_warning.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['Disk space at 4%.', {
    name: 'DiskWarning',
    message: 'Disk space at 4%.',
    code: 67,
    asString: 'DiskWarning [0x43]: Disk space at 4%.',
    asValue: 67,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x43?message=Disk%20space%20at%204%25.`,
  }],
] as const;

const cause0 = new Error('Disk space at 4%.');

export const messageCauseFixtures = [
  ['Disk space at 4%.', cause0, {
    name: 'DiskWarning',
    message: 'Disk space at 4%.',
    code: 67,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x43?message=Disk%20space%20at%204%25.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Disk space at 4%.', data, {
    name: 'DiskWarning',
    message: 'Disk space at 4%.',
    code: 67,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x43?message=Disk%20space%20at%204%25.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Disk space at 4%.', { ...data, cause: cause0 }, {
    name: 'DiskWarning',
    message: 'Disk space at 4%.',
    code: 67,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x43?message=Disk%20space%20at%204%25.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
