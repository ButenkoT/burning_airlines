var app = app || {};
app.Models = app.Models || {};

app.Models.Airplane = Backbone.Model.extend({
    urlRoot: '/planes',
    initialize: function() {}
})