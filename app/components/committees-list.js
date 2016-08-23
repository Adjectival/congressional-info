import Ember from 'ember';

export default Ember.Component.extend({
  isHouse: false,
  actions: {
    setChamber() {
      this.set('isHouse', !this.isHouse);
    }
  },
});
