var app = app || {};
app.Views = app.Views || {};

app.Views.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #newFlight': 'newFlight'
  },
  initialize: function(){
    this.render();
  },

  render: function(){
    var template = $('#appView').html();
    this.$el.html(template);

    this.collection.each(function(flight){
      var view = new app.Views.FlightsListViews({model: flight});
      view.render();
    });
  },

  newFlight: function (event) {
    console.log('new flight');
    event.preventDefault();
    app.router.navigate('flights/new', {trigger: true});
  }
});

app.Views.FlightsListViews = Backbone.View.extend({

  tagName: 'li',
  events: {
    'click': 'viewFlight'
  },
  initialize: function() {},
  render: function(){
    var template = $('#flightsListView').html();
    var flightsListHTML = Handlebars.compile(template);

    this.$el.html(flightsListHTML(this.model.toJSON()));
    $('#flights').append(this.el); //or prepend for reverse chronological order

  },

  viewFlight: function(){
    app.router.navigate('flights/' + this.model.get('id'), true);
  }


});
