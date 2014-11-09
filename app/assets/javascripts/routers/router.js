var app = app || {};

app.Router = Backbone.Router.extend({
  routes:{
    '': 'getAllFlights',
    'airplanes': 'getAirplanes',
    'airplanes/new': 'newPlane',
    'airplanes/:id': 'showPlane',
    'flights': 'getAllFlights',
    'flights/new': 'newFlight',
    'flights/:id': 'showFlight',
    'search': 'getSearch',
    'users': 'showUser',
    '*anythingElse': 'pageNotFound'
  },

  getAirplanes: function(){
    app.planes.fetch().done(function(){
      var appPlaneView = new app.Views.AppPlaneView({collection: app.planes});
      appPlaneView.render();
    });
  },

  showPlane: function(id){
    console.log('we are on the show plane page');
    var plane = app.planes.get(id);
    if(!plane){
      app.router.navigate('', true);
    } else {
      var view = new app.Views.PlaneView({model: plane});
      view.render();
    }
  },

  newPlane: function () {
    var newPlane = new app.Views.PlaneNew();
    newPlane.render();
  },

  getAllFlights: function(){
    console.log('we are on the all flights page');

    app.flights.fetch().done(function(){
      var appView = new app.Views.AppView({collection: app.flights});
      appView.render();
    });
  },

  showFlight: function(id){
    console.log('we are on the show flight page');
    var flight = app.flights.get(id);
    if(!flight){
      app.router.navigate('', true);
    } else {
      var view = new app.Views.FlightView({model: flight});
      view.render();
    }
  },

  newFlight: function () {
    var newFlight = new app.Views.FlightNew();
    newFlight.render();
  },

  getSearch: function(){},
  showUser: function(){},

  pageNotFound: function(){
    console.log('page is not found');
    app.router.navigate('', true);

  }


});