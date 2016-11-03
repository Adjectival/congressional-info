import Ember from 'ember';

export default Ember.Component.extend({
  isHouse: false,
  actions: {
    setChamber() {
      this.set('isHouse', !this.isHouse);
    }
  },
});

// Javascript uses '!' as a negator
// ie, != works for 'not equal to'
// So these 10 lines of code just flip a switch called 'isHouse' between ON & OFF... I think!
