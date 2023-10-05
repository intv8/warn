/**
 * This file contains tests for the Warning feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';
import { Warning } from '../mod.ts';
import { Exception } from '../deps.ts';
import {
  customHelpUrlFixtures,
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
  nestedFixtures,
} from './fixtures/warning.fixtures.ts';

describe('Warning', () => {
  describe('inheritance', () => {
    const instance = new Warning('');

    it('should extend Error', () => {
      assert(instance instanceof Error);
    });

    it('should extend Exception', () => {
      assert(instance instanceof Exception);
    });
  });

  describe('(message)', () => {
    it('should create an Warning with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new Warning(message);

        assert(ex instanceof Warning);
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
    it('should create an Warning with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new Warning(message, { cause });

        assert(ex instanceof Warning);
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
    it('should create an Warning with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new Warning(message, data);

        assert(ex instanceof Warning);
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
    it('should create an Warning with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new Warning(message, data);

        assert(ex instanceof Warning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('Nested Warning', () => {
    it('should have provide a consistent URL capable of deeply parsing', () => {
      nestedFixtures.forEach(([message, data, expected]) => {
        const ex = new Warning(message, data);

        assert(ex instanceof Warning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('Custom Help URL', () => {
    customHelpUrlFixtures.forEach(([actual, expected]) =>
      assertEquals(actual, expected)
    );
  });
});
