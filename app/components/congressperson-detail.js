import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: Ember.computed('congressPerson', function() {
    return 'https://twitter.com/' + this.congressPerson.twitter_id + '/profile_image?size=original';
  })
});
