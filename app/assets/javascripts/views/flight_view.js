var app = app || {};
app.Views = app.Views || {};

app.Views.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #editFlight': 'editFlight',
    'click #deleteFlight': 'deleteFlight'
  },
  initialize: function(){},
  render: function(){
    var template = $('#flightView').html();
    var flightHTML = Handlebars.compile(template);

    this.$el.html(flightHTML(this.model.toJSON()));
  },

  editFlight: function(){},

  deleteFlight: function(event){

    event.preventDefault();
    this.model.destroy();
    app.router.navigate('flights/', {trigger: true});
  }
});

