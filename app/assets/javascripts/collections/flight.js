var app = app || {};
app.Collections = app.Collections || {};

app.Collections.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Models.Flight
});

