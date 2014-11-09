var app = app || {};
app.Models = app.Models || {};

app.Models.Plane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults:{
    name: 'Hell plane',
    rows: 10,
    columns: 4
  }

});