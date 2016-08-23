import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('congressperson', {path: '/congressperson/:bioguideId'});
  this.route('committee', {path: '/committee/:committeeId'});
});

export default Router;
