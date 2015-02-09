ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  List.Controller = {
    listContacts: function() {
      var contacts = ContactManager.request("contact:entities");
      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on('childview:contact:show', function(childView, model) {
        ContactManager.trigger('contacts:show', model.get('id'));
      });

      contactsListView.on("childview:contact:delete", function(childView, model) {
        // contacts.remove(model);
        model.destroy();
      });

      contactsListView.on('childview:contact:highlighting:toggled', function(childView, model) {
        console.log('highligting toggled on model: ', model);
      });

      ContactManager.mainRegion.show(contactsListView);
    }
  };

});