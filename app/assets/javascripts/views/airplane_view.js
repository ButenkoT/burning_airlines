var app = app || {};
app.Views = app.Views || {};


app.Views.AppView = Backbone.View.extend({
    events: {
        'click submit': 'addAirplane'
    },

    el: '#main',

    initialize: function () {
    },
    render: function () {
        debugger;
        console.log('creating new plane')
        app.model.fetch().done(function(){
            var template = Handlebars.compile(app.templates.airplaneView);
            var json = app.model.toJSON();
            this.$el.html(template(json));
            return this.el;
        })
    },

    addAirplane: function (event) {

        var addAirplane = new app.Airplane({
            name: $('#airplane-name').val(),
            rows: $('#airplane-rows').val(),
            columns: $('#airplane-columns').val()
        })
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