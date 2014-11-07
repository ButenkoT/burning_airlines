var app = app || {};

app.Router = Backbone.Router.extend({
  routes:{
    '': 'getAirplanes',
    '/airplanes': 'getAirplanes',
    '/flights': 'getAllFlights',
    '/flights/:id': 'showFlight',
    '/search': 'getSearch',
    '/*anythingElse': 'pageNotFound'
  },

  getAirplanes: function(){},
  getAllFlights: function(){},
  showFlight: function(){},
  getSearch: function(){},

  pageNotFound: function(){

    //app.router.navigate('', true);

  }


});