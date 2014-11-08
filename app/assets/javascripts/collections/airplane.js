 var app = app || {};
 app.Models = app.Models || {};

 app.Airplanes = Backbone.Collection.extend({
    url: '/planes',
     models: app.Models.Airplane,
     initialize: function (){},

     defaults: {
         name: 'name here',
         column: 'column here',
         row: 'row here'
     }
 })