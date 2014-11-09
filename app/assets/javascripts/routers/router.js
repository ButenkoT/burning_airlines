var app = app || {};
app.model = app.model || {};

app.Router = Backbone.Router.extend({
  routes:{
    'planes': 'getAirplanes',
    'planes/:id': 'getAirplane',
    'planes/add': 'showAirplane',
    'airplanes': 'getAirplanes',
    'flights': 'getAllFlights',
    'flights/:id': 'showFlight',
    'search': 'getSearch',
    '*anythingElse': 'pageNotFound'
  },
  getAirplanes: function(){
    var planeCollection = new app.Airplanes();
    planeCollection.fetch().done(function(){
      var appView = new app.Views.AppView({collection: planeCollection});
      appView.render();
    });
  },

  getAirplane: function() {
    var planeModel = app.Airplane.get(id);
    var planeModel = new app.Airplane();
    planeModel.fetch().done(function() {
      var appView  = new app.Views.AppView({model: planeModel});
      appView.render();  
    });
  },

  showAirplane: function() {
    var plane
  },

  getAllFlights: function(){},
  showFlight: function(){},
  getSearch: function(){},

  pageNotFound: function(){

    //app.router.navigate('', true);

  }


});