import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.committeeId);
    let urlCommitteesSenate = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=b80d59393f384908b0b6fd75f653e624&per_page=all';
    let urlCommitteesHouse = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=b80d59393f384908b0b6fd75f653e624&per_page=all';
    return Ember.RSVP.hash({
      senate: Ember.$.getJSON(urlCommitteesSenate),
      house: Ember.$.getJSON(urlCommitteesHouse),

    });
  }
});
