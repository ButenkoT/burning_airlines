var app = app || {};
app.Views = app.Views || {};

app.Views.FlightView = Backbone.View.extend({
  tag: 'div',
  id: 'flightDetails',
  events: {
    'click #editFlight': 'editFlight',
    'click #deleteFlight': 'deleteFlight'
  },
  initialize: function(){
    //this.listenTo(this.model, 'destroy', this.destroy);
    $('#main').html(this.$el);
    this.render();
  },
  render: function(){
    var template = $('#flightView').html();
    var flightHTML = Handlebars.compile(template);

    this.$el.html(flightHTML(this.model.toJSON()));
  },

  editFlight: function(){},

  deleteFlight: function(event){

    event.preventDefault();

    this.model.destroy({success: function() {
      alert('Successfully destroyed flight');
    }});
    app.router.navigate('flights/', {trigger: true});
  }
});

