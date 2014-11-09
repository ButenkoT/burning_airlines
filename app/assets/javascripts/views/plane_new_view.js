var app = app || {};
app.Views = app.Views || {};

app.Views.PlaneNew = Backbone.View.extend({
  tag: 'div',
  id: 'newPlaneForm',
  events: {
    'submit form': 'createPlane'
  },

  initialize: function () {
    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var template = $('#planeNewView').html();
    this.$el.html(template);
  },

  createPlane: function (event) {
    event.preventDefault();

    var newPlane = new app.Models.Plane();

    newPlane.set('name', $('#plane_name').val());
    newPlane.set('rows', $('#plane_rows').val());
    newPlane.set('columns', $('#plane_columns').val());

    newPlane.save().done(function () {
      app.planes.add(newPlane);
      app.router.navigate('', {trigger: true});
    });
  }
});
