import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('rental', {title: 'FooBar'});

  this.render(hbs`{{rental-listing rental=rental}}`);

  assert.equal(this.$('.rental-title').text().trim(), 'FooBar');
});
