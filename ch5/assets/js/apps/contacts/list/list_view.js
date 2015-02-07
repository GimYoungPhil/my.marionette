ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: 'ContactManager.ContactsApp.List.Templates.contactView',

    events: {
      'click': 'highlightName',
      "click td": "alertCellText"
    },

    highlightName: function(e) {
      e.preventDefault();
      this.$el.toggleClass('warning');
    },

    alertCellText: function(e) {
      e.preventDefault();
      alert($(e.target).text());
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: 'table table-hover',
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody"
  });

});