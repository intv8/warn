/**
 * This file contains tests for the PendingDeprecationWarning feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import { FutureWarning, PendingDeprecationWarning, Warning } from '../mod.ts';

import { Exception } from '../deps.ts';

import {
  initFixtures,
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
} from './fixtures/pending_deprecation_warning.fixtures.ts';

describe('PendingDeprecationWarning', () => {
  describe('inheritance', () => {
    const instance = new PendingDeprecationWarning('');

    it('should extend Error', () => {
      assert(instance instanceof Error);
    });

    it('should extend Exception', () => {
      assert(instance instanceof Exception);
    });

    it('should extend Warning', () => {
      assert(instance instanceof Warning);
    });

    it('should extend FutureWarning', () => {
      assert(instance instanceof FutureWarning);
    });
  });

  describe('(message)', () => {
    it('should create an PendingDeprecationWarning with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new PendingDeprecationWarning(message);

        assert(ex instanceof PendingDeprecationWarning);
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
    it('should create an PendingDeprecationWarning with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new PendingDeprecationWarning(message, { cause });

        assert(ex instanceof PendingDeprecationWarning);
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
    it('should create an PendingDeprecationWarning with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new PendingDeprecationWarning(message, data);

        assert(ex instanceof PendingDeprecationWarning);
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
    it('should create an PendingDeprecationWarning with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new PendingDeprecationWarning(message, data);

        assert(ex instanceof PendingDeprecationWarning);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(init)', () => {
    it('should create an PendingDeprecationWarning with the provided init', () => {
      initFixtures.forEach(([init, expected]) => {
        const ex = new PendingDeprecationWarning(init);

        assert(ex instanceof PendingDeprecationWarning);
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
});
