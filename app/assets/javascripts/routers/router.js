var app = app || {};

app.Router = Backbone.Router.extend({
  routes:{
    'planes': 'getAirplanes',
    'airplanes': 'getAirplanes',
    'flights': 'getAllFlights',
    'flights/:id': 'showFlight',
    'search': 'getSearch',
    '*anythingElse': 'pageNotFound'
  },
  getAirplanes: function(){
    var appView = new app.Views.AppView;
    appView.render();
  },
  getAllFlights: function(){},
  showFlight: function(){},
  getSearch: function(){},

  pageNotFound: function(){

    //app.router.navigate('', true);

  }


});