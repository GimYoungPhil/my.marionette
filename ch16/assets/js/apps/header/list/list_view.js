ContactManager.module("HeaderApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  List.Header = Marionette.ItemView.extend({
    template: "#header-link",
    tagName: "li"
  });

  List.Headers = Marionette.CompositeView.extend({
    template: "#header-template",
    tagName: 'nav',
    className: "navbar navbar-inverse navbar-fixed-top",
    childView: List.Header,
    childViewContainer: "ul"
  });

});