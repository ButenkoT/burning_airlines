var app = app || {};

app.Router = Backbone.Router.extend({
  routes:{
    '': 'getAllFlights',
    'airplanes': 'getAirplanes',
    'flights': 'getAllFlights',
    'flights/new': 'newFlight',
    'flights/:id': 'showFlight',
    'search': 'getSearch',
    'users': 'showUser',
    '*anythingElse': 'pageNotFound'
  },

  getAirplanes: function(){},

  getAllFlights: function(){
    console.log('we are on the all flights page');
    /*var appView = */new app.Views.AppView({collection: app.flights});
    //appView.render();
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