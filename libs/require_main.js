require.config({
  baseUrl: "../libs",
  paths: {
    jquery:     "jquery-2.1.3/jquery-2.1.3",
    underscore: "underscore-1.7.0/underscore",
    backbone:   "backbone-1.1.2/backbone",
    marionette: "backbone.marionette-2.3.2/backbone.marionette"
  },

  shim: {
    // underscore: {
    //   exports: "_"
    // },
    // backbone: {
    //   deps: ["jquery", "underscore"],
    //   exports: "Backbone"
    // },
    // marionette: {
    //   deps: ["backbone"],
    //   exports: "Marionette"
    // }
  }
});

require(["backbone"], function(){
  console.log("jQuery version: ", $.fn.jquery);
  console.log("underscore identity call: ", _.identity(5));
  console.log("Backbone.history", Backbone.history);
  console.log("Marionette: ", Marionette);
});