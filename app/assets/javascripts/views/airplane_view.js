var app = app || {};
appViews = appViews || {};

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
        if (event.type == 'submit') {
            event.preventDefault();
        }
        var addPlane = new app.Airplane({name: $('#airplane-name').val(), rows('#airplane-rows').val(), columns('#airplane-columns').val()})
    }
})