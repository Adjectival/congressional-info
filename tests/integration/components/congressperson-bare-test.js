import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('congressperson-bare', 'Integration | Component | congressperson bare', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{congressperson-bare}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#congressperson-bare}}
      template block text
    {{/congressperson-bare}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
