var app = app || {};
app.Views = app.Views || {};

app.Views.FlightView = Backbone.View.extend({
  el: '#main',
  initialize: function(){},
  render: function(){
    var template = $('#flightView').html();
    var flightHTML = Handlebars.compile(template);

    this.$el.html(flightHTML(this.model.toJSON()));
  }
});

