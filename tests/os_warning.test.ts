/**
 * This file contains tests for the OSWarning feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import { OSWarning, Warning } from '../mod.ts';

import { Exception } from '../deps.ts';

import {
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
} from './fixtures/os_warning.fixtures.ts';

describe('OSWarning', () => {
  describe('inheritance', () => {
    const instance = new OSWarning('');

    it('should extend Error', () => {
      assert(instance instanceof Error);
    });

    it('should extend Exception', () => {
      assert(instance instanceof Exception);
    });

    it('should extend Warning', () => {
      assert(instance instanceof Warning);
    });
  });

  describe('(message)', () => {
    it('should create an OSWarning with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new OSWarning(message);

        assert(ex instanceof OSWarning);
        assertEquals(ex.name, expected.name);
        assertEquals(`${ex}`, expected.asString);
        assertEquals(+ex, expected.asValue);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, {cause})', () => {
    it('should create an OSWarning with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new OSWarning(message, { cause });

        assert(ex instanceof OSWarning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, data)', () => {
    it('should create an OSWarning with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new OSWarning(message, data);

        assert(ex instanceof OSWarning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, {cause, ...data})', () => {
    it('should create an OSWarning with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new OSWarning(message, data);

        assert(ex instanceof OSWarning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });
});
