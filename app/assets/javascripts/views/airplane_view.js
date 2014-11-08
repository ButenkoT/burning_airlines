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
    },

    addAirplane: function (event) {

        var addAirplane = new app.Airplane({
            name: $('#airplane-name').val(),
            rows: $('#airplane-rows').val(),
            columns: $('#airplane-columns').val()
        })
    },
    showAirplane: function () {
        console.log('show airplane')
        $('#airplaneView').empty('');
        var template = $('#airplaneShow').html();
        var displayHTML = Handlebars.compile(template);

        this.$el.html(displayHTML({plane: this.model.toJSON()}));


// empty el;
// declare template for single plane view
// compile template
//


    },
})