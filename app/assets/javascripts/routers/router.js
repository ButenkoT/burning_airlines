var app = app || {};

app.Router = Backbone.Router.extend({
  routes:{
    '': 'getAirplanes',
    '/airplanes': 'getAirplanes',
    '/flights': 'getAllFlights',
    '/flights/:id': 'showFlight',
    '/search': 'getSearch',
    '/users': 'showUser',
    '/*anythingElse': 'pageNotFound'
  },

  getAirplanes: function(){},

  getAllFlights: function(){
    var appView = new app.Views.AppView({collection: app.flights});
    appView.render();
  },

  showFlight: function(id){
    var flight = app.flights.get(id);
    if(!flight){
      app.router.navigate('', true);
    } else {
      var view = new app.Views.FlightView({model: flight});
      view.render();
    }
  },

  getSearch: function(){},
  showUser: function(){},

  pageNotFound: function(){

    app.router.navigate('', true);

  }


});