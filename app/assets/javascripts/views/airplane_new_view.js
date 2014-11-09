var app = app || {};
app.Views = app.Views || {};

app.Views.addAirplane = Backbone.View.extend({
  tag: 'div',
  id: 'newPlane',
  events: {
    'clickSubmit': 'createPlane'
  },

  initialize: function () {
    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var template = $('#airplaneNewView').html();
    this.$el.html(template);
  },

  addAirplane: function (event) {
    event.preventDefault();

    var addAirplane = new app.Airplane({
        name: $('#airplane-name').val(),
        rows: $('#airplane-rows').val(),
        columns: $('#airplane-columns').val()
    })
  },

    // addAirplane.save().done(function () {
    //   app.planes.add(addAirplane);
    //   app.router.navigate('', {trigger: true});
    // });
  }
});