import Ember from 'ember';

export default Ember.Component.extend({
  legislators: [],
  displayResults: false,
  actions: {
    zipLookup() {
      var hoc = this;
      var params = {
        zip: this.get('zip')
      };
      var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=b80d59393f384908b0b6fd75f653e624&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON.results);
        hoc.set('legislators', responseJSON.results);
        hoc.set('displayResults', true);
      });
    }
  }
});
