ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: 'ContactManager.ContactsApp.List.Templates.contactView',

    events: {
      'click': 'highlightName',
      'click button.js-delete': 'deleteClicked'
    },

    highlightName: function(e) {
      e.preventDefault();
      // this.$el.toggleClass('warning');
      this.trigger('contact:highlighting:toggled', this.model);
    },

    deleteClicked: function(e) {
      e.stopPropagation();
      // this.model.collection.remove(this.model);
      this.trigger('contact:delete', this.model);
    },

    remove: function() {
      var self = this;
      this.$el.fadeOut(function() {
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: 'table table-hover',
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody",

    onRemoveChild: function() {
      this.$el.fadeOut(1000, function() {
        $(this).fadeIn(1000);
      });
    }
  });

});