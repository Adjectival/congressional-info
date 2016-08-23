import Ember from 'ember';

export default Ember.Component.extend({
  subcommittees:"",
  isSubbed: false,
  actions: {
    seeSubs() {

      console.log(this.get('abcd'));
      this.set('subcommittees', "");
      this.set('isSubbed', !this.isSubbed);
      var hoc = this;
      var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + this.get('abcd').chamber + '&subcommittee=true&parent_committee_id=' +this.get('abcd').committee_id +'&apikey=b80d59393f384908b0b6fd75f653e624';
      console.log(url);
      return Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(JSON.stringify(responseJSON.results));
        hoc.set('subcommittees', responseJSON.results);
      });
    },
  }
});
