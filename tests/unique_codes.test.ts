/**
 * Checks that exception and warning codes are unique.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, describe, it } from '../dev_deps.ts';

import { allCodesFixture } from './fixtures/unique_codes.fixtures.ts';

describe('Unique exception/warning codes', () => {
  it('should have unique codes', () => {
    const codes = new Set<number>();

    for (const code of allCodesFixture) {
      assert(!codes.has(code), `Duplicate code: ${code}`);
      codes.add(code);
    }
  });
});
