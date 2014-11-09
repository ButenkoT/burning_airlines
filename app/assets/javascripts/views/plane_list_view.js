var app = app || {};
app.Views = app.Views || {};

app.Views.AppPlaneView = Backbone.View.extend({
  tag: 'div',
  id: 'planeList',
  events: {
    'click #newPlane': 'newPlane'
  },

  initialize: function(){
    $('#main').html(this.$el);
    this.render();
  },

  render: function(){
    var template = $('#appPlaneView').html();
    this.$el.html(template);
    this.collection.each(function(plane){
      var view = new app.Views.PlanesListViews({model: plane});
      view.render();
    });
  },

  newPlane: function (event) {
    console.log('new plane');
    event.preventDefault();
    app.router.navigate('airplanes/new', {trigger: true});
  }
});

app.Views.PlanesListViews = Backbone.View.extend({

  tagName: 'li',
  events: {
    'click': 'viewPlane'
  },
  initialize: function() {},
  render: function(){
    var template = $('#planesListView').html();
    var planesListHTML = Handlebars.compile(template);

    this.$el.html(planesListHTML(this.model.toJSON()));

    $('#planes').append(this.el); //or prepend for reverse chronological order

  },

  viewPlane: function(){
    app.router.navigate('airplanes/' + this.model.get('id'), true);
  }


});

