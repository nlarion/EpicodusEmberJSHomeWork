import Ember from 'ember';

export function cityPopularity(params) {
  var city = params[0];
  console.log(city.get('rentals').get('length'));
  if(city.get('rentals').get('length') >= 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(cityPopularity);
