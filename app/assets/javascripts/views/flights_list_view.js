var app = app || {};
app.Views = {};

app.Views.FlightsListViews = Backbone.View.extend({

  el: '#flightsapp',
  statsTemplate: _.template($('#flights-template').html()),
  events:{}



  //events: {
  //  'keypress #new-todo': 'createOnEnter',
  //  'click #clear-completed': 'clearCompleted',
  //  'click #toggle-all': 'toggleAllComplete'
  //},
});