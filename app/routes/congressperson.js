import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params.bioguide);
    var urlCommittee = 'http://congress.api.sunlightfoundation.com/committees?apikey=b80d59393f384908b0b6fd75f653e624&member_ids=' + params.bioguide;
    var urlCongressPerson = 'http://congress.api.sunlightfoundation.com/legislators?apikey=b80d59393f384908b0b6fd75f653e624&bioguide_id=' + params.bioguide + '&all_legislators=true';
    console.log(params);
    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(urlCommittee),
      congressPersons: Ember.$.getJSON(urlCongressPerson),
    });
  },
  actions: {

  }
});
