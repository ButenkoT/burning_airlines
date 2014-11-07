var app = app || {};
app.Collections = app.Collections || {};

app.Collections.Flights = Backbone.Collection.extend({
  model: app.Model.Flight
});

