var app = app || {};
app.Collections = app.Collections || {};

app.Collections.Planes = Backbone.Collection.extend({
  url: '/airplanes',
  model: app.Models.Plane
});