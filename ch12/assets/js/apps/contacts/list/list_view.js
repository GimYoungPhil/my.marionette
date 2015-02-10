ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Layout = Marionette.LayoutView.extend({
    template: "#contact-list-layout",

    regions: {
      panelRegion: "#panel-region",
      contactsRegion: "#contacts-region"
    }
  });

  List.Panel = Marionette.ItemView.extend({
    template: "#contact-list-panel"
  });

  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: 'ContactManager.ContactsApp.List.Templates.contactView',

    events: {
      'click': 'highlightName',
      'click a.js-show': 'showClicked',
      'click td a.js-edit': 'editClicked',
      'click button.js-delete': 'deleteClicked'
    },

    highlightName: function(e) {
      e.preventDefault();
      this.$el.toggleClass('warning');
      this.trigger('contact:highlighting:toggled', this.model);
    },

    showClicked: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:show', this.model);
    },

    editClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:edit", this.model);
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
    },

    flash: function(cssClass) {
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function() {
        setTimeout(function() {
          $view.toggleClass(cssClass)
        }, 500);
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