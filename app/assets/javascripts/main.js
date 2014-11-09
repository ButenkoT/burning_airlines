var app = app || {};
//var ENTER_KEY = 13;

$(function () {
  if ($('#main').length === 0) {
    return;
  }

  app.planes = new app.Collections.Planes();

  app.planes.fetch().done(function () {
    app.router = new app.Router();
    Backbone.history.start();
  });

  app.flights = new app.Collections.Flights();

  app.flights.fetch().done(function () {
    app.router = new app.Router();
    Backbone.history.start();
  });

});