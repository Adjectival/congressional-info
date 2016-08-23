import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var urlCommittee = 'http://congress.api.sunlightfoundation.com/committees?apikey=b80d59393f384908b0b6fd75f653e624&member_ids=' + params.bioguideId;
    var urlCongressPerson = 'http://congress.api.sunlightfoundation.com/legislators?apikey=b80d59393f384908b0b6fd75f653e624&bioguide_id=' + params.bioguideId + '&all_legislators=true';
    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(urlCommittee),
      congressPersons: Ember.$.getJSON(urlCongressPerson),
    });
  },
  actions: {

  }
});
