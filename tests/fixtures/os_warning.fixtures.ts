/**
 * This file contains test cases, mocks, or other data for testing the
 * OSWarning feature.
 *
 * For use in ../os_warning.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export const messageFixtures = [
  ['Running out of memory.', {
    name: 'OSWarning',
    message: 'Running out of memory.',
    code: 65,
    asString: 'OSWarning [0x41]: Running out of memory.',
    asValue: 65,
    cause: undefined,
    data: undefined,
    helpUrl: `/0x41?message=Running%20out%20of%20memory.`,
  }],
] as const;

const cause0 = new Error('Running out of memory.');

export const messageCauseFixtures = [
  ['Running out of memory.', cause0, {
    name: 'OSWarning',
    message: 'Running out of memory.',
    code: 65,
    cause: cause0,
    data: undefined,
    helpUrl: `/0x41?message=Running%20out%20of%20memory.&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Running out of memory.', data, {
    name: 'OSWarning',
    message: 'Running out of memory.',
    code: 65,
    cause: undefined,
    data,
    helpUrl: `/0x41?message=Running%20out%20of%20memory.&data=${
      encodeURIComponent(JSON.stringify(data))
    }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Running out of memory.', { ...data, cause: cause0 }, {
    name: 'OSWarning',
    message: 'Running out of memory.',
    code: 65,
    cause: cause0,
    data,
    helpUrl: `/0x41?message=Running%20out%20of%20memory.&data=${
      encodeURIComponent(JSON.stringify(data))
    }&cause=${
      encodeURIComponent(
        JSON.stringify({ name: 'Error', message: cause0.message }),
      )
    }`,
  }],
] as const;
