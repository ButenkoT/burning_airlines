var app = app || {};
app.Views = app.Views || {};

app.Views.FlightNew = Backbone.View.extend({
  tag: 'div',
  id: 'newFlightForm',
  events: {
    'submit form': 'createFlight'
  },

  initialize: function () {
    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var template = $('#flightNewView').html();
    this.$el.html(template);
  },

  createFlight: function (event) {
    event.preventDefault();

    var newFlight = new app.Models.Flight();

    newFlight.set('number', $('#flight_number').val());
    newFlight.set('origin', $('#flight_origin').val());
    newFlight.set('destination', $('#flight_destination').val());
    newFlight.set('date', $('#flight_date').val());
    newFlight.set('plane_name', $('#flight_plane_name').val());

    newFlight.save().done(function () {
      app.flights.add(newFlight);
      app.router.navigate('', {trigger: true});
    });
  }
});
