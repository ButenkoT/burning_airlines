var app = app || {};

$(document).ready (function() {
    console.log('document ready')
    app.templates = {
        airplaneView: $('#airplaneView').html()
    }
    var router = new app.Router();
    Backbone.history.start();

    app.model = new app.Models.Airplane;
    console.log('app.model',app.model);
    app.model.fetch();

    app.collection = new app.Airplanes;
    app.collection.fetch();

});