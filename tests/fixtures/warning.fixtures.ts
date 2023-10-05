/**
 * This file contains test cases, mocks, or other data for testing the Warning feature.
 *
 * For use in ../warning.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

import { Warning } from '../../mod.ts';

export const messageFixtures = [
  ['Something is going wrong.', {
    name: 'Warning',
    message: 'Something is going wrong.',
    code: 64,
    asString: 'Warning [0x40]: Something is going wrong.',
    asValue: 64,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Something%20is%20going%20wrong.`,
  }],
] as const;

const cause0 = new Error('Something is going wrong.');

export const messageCauseFixtures = [
  ['Something is going wrong.', cause0, {
    name: 'Warning',
    message: 'Something is going wrong.',
    code: 64,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Something%20is%20going%20wrong.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Something is going wrong.', data, {
    name: 'Warning',
    message: 'Something is going wrong.',
    code: 64,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Something%20is%20going%20wrong.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Something is going wrong.', { ...data, cause: cause0 }, {
    name: 'Warning',
    message: 'Something is going wrong.',
    code: 64,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Something%20is%20going%20wrong.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const cause1 = new Warning('An error occurred.', {
  cause: cause0,
  foo: 'bar',
});
const cause2 = new Warning('Cannot complete process.', {
  cause: cause1,
  baz: 42,
});

export const nestedFixtures = [
  ['Something is going wrong.', { qux: true, cause: cause2 }, {
    name: 'Warning',
    message: 'Something is going wrong.',
    code: 64,
    cause: cause2,
    data: { qux: true },
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Something%20is%20going%20wrong.&data=${
        encodeURIComponent(JSON.stringify({ qux: true }))
      }&cause=${
        encodeURIComponent(JSON.stringify({
          name: 'Warning',
          message: cause2.message,
          helpUrl:
            `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=Cannot%20complete%20process.&data=${
              encodeURIComponent(JSON.stringify({ baz: 42 }))
            }&cause=${
              encodeURIComponent(JSON.stringify({
                name: 'Warning',
                message: cause1.message,
                helpUrl:
                  `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x40?message=An%20error%20occurred.&data=${
                    encodeURIComponent(JSON.stringify({ foo: 'bar' }))
                  }&cause=${
                    encodeURIComponent(
                      JSON.stringify({
                        name: 'Error',
                        message: cause0.message,
                      }),
                    )
                  }`,
              }))
            }`,
        }))
      }`,
  }],
] as const;

class WarningCustomHelpUrl extends Warning {
  protected getHelpUrlHost(): string {
    return 'https://example.com';
  }

  protected getHelpUrlPath(): string {
    return `/help/${this.code}`;
  }

  public get helpUrl(): string {
    return super.helpUrl;
  }
}

const cause3 = new WarningCustomHelpUrl('An error occurred.');

export const customHelpUrlFixtures = [
  [
    cause3.helpUrl,
    'https://example.com/help/64?message=An%20error%20occurred.',
  ],
] as const;
