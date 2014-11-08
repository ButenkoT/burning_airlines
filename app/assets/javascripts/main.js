var app = app || {};
//var ENTER_KEY = 13;

//$(function() {
//
//  app.flights = new app.Collections.Flights([
//    new app.Models.Flight({id: 1, name:'12JK90', origin: 'Sydney', destination: 'Perth', date: '2014.12.10'}),
//    new app.Models.Flight({id: 2, name:'15GH96', origin: 'Sydney', destination: 'Brisban', date: '2014.12.12'}),
//    new app.Models.Flight({id: 3, name:'67AC70', origin: 'Perth', destination: 'Sydney', date: '2014.12.20'}),
//    new app.Models.Flight({id: 4, name:'68AD89', origin: 'Brisban', destination: 'Sydney', date: '2014.12.15'})
//  ]);
//
//  app.router = new app.Router();
//  Backbone.history.start();
//
//});


$(function () {
  if ($('#main').length === 0) {
    return;
  };



  app.flights = new app.Collections.Flights();

  app.flights.fetch().done(function () {
    app.router = new app.Router();
    Backbone.history.start();
  });

});