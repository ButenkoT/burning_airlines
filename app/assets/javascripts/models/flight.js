var app = app || {};
app.Models = {};

app.Models.Flight = Backbone.Model.extend({
  defaults:{
    number: '11AA1A',
    origin: 'No origin assigned',
    destination: 'No destination assigned',
    date: '2015.01.01',
    plane_name: 'Hell plane'
  }

});

