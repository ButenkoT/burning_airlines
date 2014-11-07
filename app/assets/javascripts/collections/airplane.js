 var app = app || {};

 app.Airplanes = Backbone.Collection.extend({
    url: '/airplanes',
     models: app.Models.Airplane,
     initialize: function (){}
 })