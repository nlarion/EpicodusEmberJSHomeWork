import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['costLasc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
          if (confirm('Are you sure you want to delete this rental?')) {
            this.sendAction('destroyRental', rental);
          }
        }
  }
});
