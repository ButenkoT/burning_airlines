var app = app || {};
app.Views = app.Views || {};


app.AppView = Backbone.View.extend({
    events: {
        'click': 'addAirplane',
        'submit': 'addAirplane'
    },

    initialize: function() {},
    render: function() {
        console.log('creating new plane')
        this.$el.html (app.templates.airplaneView);
        return this.el
    },

    addAirplane: function(event) {

        var addAirplane = new app.Airplane({name: $('#airplane-name').val(), rows$('#airplane-rows').val(), columns$('#airplane-columns').val()})
    }

    //initialize: function() {},
    //render: function() {
    //    var template = $('#airplane_view').html();
    //    this.$el.html( template );
    //
    //    this.collection.each(function (airplane) {
    //        var view = new app.Views
    //    });
    //}
})