import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | listeRoute', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:liste-route');
    assert.ok(route);
  });
});
