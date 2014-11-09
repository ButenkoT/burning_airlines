var app = app || {};
app.Views = app.Views || {};

app.Views.PlaneView = Backbone.View.extend({
  tag: 'div',
  id: 'planeDetails',
  events: {
    'click #editPlane': 'editPlane',
    'click #deletePlane': 'deletePlane'
  },
  initialize: function(){
    //this.listenTo(this.model, 'destroy', this.destroy);
    //_.bindAll(this, "editFlight");
    //this.on('change', this.editFlight);
    $('#main').html(this.$el);
    this.render();
  },
  render: function(){
    var template = $('#planeView').html();
    var planeHTML = Handlebars.compile(template);

    this.$el.html(planeHTML(this.model.toJSON()));
  },

  editFlight: function(event){
    event.preventDefault();

  },

  deleteFlight: function(event){

    event.preventDefault();

    this.model.destroy({success: function() {
      console.log('Successfully destroyed plane');
    }});
    app.router.navigate('airplanes/', {trigger: true});
  }
});
