var app = app || {};
app.Views = app.Views || {};
app.model = app.model || {};


app.Views.AppView = Backbone.View.extend({
    events: {
        'click .plane_name' : 'showAirplane'
    },

    el: '#main',

    initialize: function () {
    },
    render: function () {
        var template = $('#airplaneView').html();
        var displayHTML = Handlebars.compile(template);

        this.$el.html(displayHTML({planes: this.collection.toJSON()}));

        // console.log('creating new plane');
        //     var template = Handlebars.compile(app.templates.airplaneView);
        //     var json = app.model.toJSON();
        //     this.$el.html(template(json));
        // debugger;
        //     return this.el;
    },

    addAirplane: function (event) {

        var addAirplane = new app.Airplane({
            name: $('#airplane-name').val(),
            rows: $('#airplane-rows').val(),
            columns: $('#airplane-columns').val()
        })
    },
    showAirplane: function () {
        console.log('showAirplane')
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