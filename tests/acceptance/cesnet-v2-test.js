import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | cesnet v2', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /cesnet-v2', async function(assert) {
    await visit('/cesnet-v2');

    assert.equal(currentURL(), '/cesnet-v2');
  });
});
