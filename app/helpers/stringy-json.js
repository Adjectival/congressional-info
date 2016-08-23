import Ember from 'ember';

export function stringyJSON(params) {
  console.log(JSON.stringify(params[0]));
}

export default Ember.Helper.helper(stringyJSON);
