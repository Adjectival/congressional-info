import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: Ember.computed('congressperson', function() {
    return 'https://twitter.com/' + this.congressperson.twitter_id + '/profile_image?size=bigger';
  })

});
