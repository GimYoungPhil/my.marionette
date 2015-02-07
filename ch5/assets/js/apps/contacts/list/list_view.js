ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    tagName: "div",
    className: 'col-xs-4',
    template: 'ContactManager.ContactsApp.List.Templates.contactView'
  });

  List.Contacts = Marionette.CollectionView.extend({
    tagName: "div",
    className: 'row',
    childView: List.Contact
  });

});