import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.committeeId);
    let urlCommittee = 'http://congress.api.sunlightfoundation.com/committees?apikey=b80d59393f384908b0b6fd75f653e624&committee_id=' + params.committeeId + '&fields=members';
    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(urlCommittee),

    });
  }
});
