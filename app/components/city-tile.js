import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }),

  sortBy: ['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),

  isImageShowing: false,

  actions: {
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    },

    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    }
  }
});
